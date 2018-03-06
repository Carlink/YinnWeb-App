/**
 * Created by davo on 7/24/17.
 */
const fs = require('fs-extra');
const admin = require('./../../util/firebase/admin');
const templayed = require('templayed');
const minify = require('html-minifier').minify;
const minify_rules = { //Please check https://www.npmjs.com/package/html-minifier for rules info.
    quoteCharacter : "'",
    sortAttributes : true,
    useShortDoctype : true,
    collapseWhitespace : true,
    collapseInlineTagWhitespace : true,
    keepClosingSlash : true
};

const renderViews = require('./nuxt/utils/renderViews');

renderViews.reloadFileNamesOnDB()
  .then((isDone)=>{
    console.log(`reloadFileNamesOnDB is : ${isDone ? "ok" : "error"}`);
    renderViews.render()
      .then((done)=>{
        console.log(`render html files is : ${done? "ok" : "error"}`);
      });
  });

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name.replace(/\.\/views/g,''));
        }
    }
    return files_;
}

function renderObject(json) {
    let m = [];
    for(let x in json.metas){
        m.push(json.metas[x]);
    }
    json.metas = m.join("\n");
    return json;
}

module.exports.render = () => {
    return new Promise((resolve,reject) => {
        try {

            admin.database().ref("/seo/views").once('value',
                (snapshot) =>{
                    let obj = snapshot.exportVal()? snapshot.exportVal() : {};
                    snapshot.forEach((k)=>{
                        let key = k.child("file").val();
                        obj[key] = k.exportVal();
                        obj[key].uid = k.key;
                    });
                    fs.emptyDirSync("./renderedViews");
                    getFiles("./views").forEach(file => {
                        let file_txt = fs.readFileSync("./views" + file).toString('utf-8');
                        fs.outputFileSync(
                            './renderedViews/' + file,
                            ( process.env.PRODUCTION ?
                                minify(templayed(file_txt)(obj[file]? renderObject(obj[file]) : {}),minify_rules) :
                                templayed(file_txt)(obj[file]? renderObject(obj[file]) : {})),
                            "utf-8"
                        );
                    });
                    resolve(true);
                },
                (error) => {
                    console.error(error);
                    reject(error);
                });
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};
module.exports.reloadFileNamesOnDB = () => {
    let meta = function (file){
    return {
                title : "sin titulo",
                metas : ["sin meta"],
                links : [{"sin":"links"}],
                images: [{"sin":"alt"}],
                file : file
            };
    };

    return new Promise((resolve,reject) => {
        try {
            let db = admin.database();
            db.ref("/seo/views").once('value',
                (snapshot)=>{
                    let arr = getFiles("./views");
                    let current_DB = {};
                    snapshot.forEach((k)=>{
                        let key = k.child("file").val();
                        current_DB[key] = k.exportVal();
                        current_DB[key].uid = k.key;
                    });
                    arr.forEach(file => {
                        if(!current_DB.hasOwnProperty(file)){
                            current_DB[file] = meta(file);
                        }
                        let txt = fs.readFileSync("./views" + file).toString("utf-8");
                        let img_found = txt.match(/<img([\w\W]+?)>/g);
                        let link_found = txt.match(/<a([\w\W]+?)>/g);
                        if(img_found) current_DB[file].images = img_found;
                        if(link_found) current_DB[file].links = link_found;
                    });
                    let viewsDB = db.ref("/seo/views");
                    for(let k in current_DB){
                        let uid = current_DB[k].uid;
                        current_DB[k].uid = null;
                        if (!uid) {
                            viewsDB.push().set(current_DB[k]);
                        }else{
                            viewsDB.child(uid).update(current_DB[k])
                        }

                    };
                    resolve(true);
                },
                (error)=>{
                    resolve(error);
                });

        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};