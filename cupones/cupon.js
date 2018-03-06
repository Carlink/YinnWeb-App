var pdf = require('html-pdf'); 
var qr = require('qrcode');
var temp = require('temp');
var fs = require('fs');
var bb = require('bluebird');
var leeArchivo = bb.promisify(require("fs").readFile);

var baseProy="file:///Users/Francisco/Documents/Proyecto Morelos/ModulosMorelos/cupones/";

checaArray = function(a) {
	return (!!a) && (a.constructor === Array);
}

function modificaHTML(archivoHTML,objDescuentos,qrRuta){
	return new Promise(function(resolve,reject){
		if(archivoHTML == '' || objDescuentos == null || qrRuta == ''){
			reject(new Error('Parámetros de modificación HTML vacíos: \n=>'+archivoHTML+'\n=>'+objDescuentos+'\n=>'+qrRuta));
		} else {
			//console.log('==>'+archivoHTML+'\n==>'+objDescuentos+'\n==>'+qrRuta);
			var etiquetaTabla='dataTabla';
			var etiquetaQR='qrDiv';
			var ajusteTabla=11;
			var ajusteQR=7;

			let textoTabla = '';
			for(let llave of Object.keys(objDescuentos)){
				if(objDescuentos.hasOwnProperty(llave)){
					//console.log('=>'+llave);
					textoTabla += '<tr><td>'+llave+'</td>';
					if(checaArray(objDescuentos[llave])){
						for(let valor of objDescuentos[llave]){
							//console.log(valor);
							textoTabla += '<td>'+valor+'</td>';
						}
					}else{
						//console.log(objDescuentos[llave]);
						textoTabla += '<td>'+objDescuentos[llave]+'</td>';
					}
					textoTabla += '</tr>';
				}
			}
			//Obtenemos el texto de la plantilla
			var textoHTML = fs.readFileSync(archivoHTML,'utf8');
			/*console.log('\nAhora va el archivo:'+textoHTML+'\n');
			console.log('\nSe va a buscar'+etiquetaQR+'\n');
			console.log('\nSe va a buscar:'+textoHTML+'\n');*/
			
			//Calculamos los índices de la etiqueta de tabla e insertamos la tabla
			var indexTabla=textoHTML.indexOf(etiquetaTabla);
			var textoHTMLFinal='';
			if(indexTabla == -1){
				reject(new Error('El archivo con ruta: "'+archivoHTML+'" no contiene la eqitueta: "'+etiquetaTabla+'"'));
			} else {
				textoHTMLFinal = textoHTML.slice(0,indexTabla+ajusteTabla) + textoTabla + textoHTML.slice(indexTabla+ajusteTabla);
			}
			//Calculamos los índices de la etiqueta de código e insertamos el código
			var indexQr=textoHTMLFinal.indexOf(etiquetaQR);
			if(indexQr == -1){
				reject(new Error('El archivo con ruta: "'+archivoHTML+'" no contiene la eqitueta: "'+etiquetaQR+'"'));
			} else {
				let textoQR = '<img src="'+qrRuta+'">';
				textoHTMLFinal = textoHTMLFinal.slice(0,indexQr+ajusteQR)+textoQR+textoHTMLFinal.slice(indexQr+ajusteQR);
			}
			//Escribimos un archivo temporal html y regresamos su ruta
			var rutaTemporal = 'temp.html';
			fs.writeFile(rutaTemporal, textoHTMLFinal, function (err) {
				if (err) {
					reject(new Error('Error al escribir el archivo  html temporal: '+err));
				}
				console.log('Archivo temporal HTML de cupón generado!');
			});
			resolve(rutaTemporal);
		}
	});
}

function generaPDF(varHTML,rutaPDF){
	return new Promise(function (resolve,reject){
		//Cambiar!!!
		var opcionesPDF = { base: baseProy };
		pdf.create(varHTML, opcionesPDF).toFile(rutaPDF, function(err, res) {
			if (err){
				reject(err);
			}
			resolve(res);
		});
	});
}

function generaQR(codigoCupon,rutaQR){
	return new Promise(function (resolve,reject){
		if(rutaQR == ''){
			rutaQR = 'qr.png';
		}
		if(codigoCupon == ''){
			reject(new Error('No código presente dentro del objeto de datos'));
		}
		console.log('***'+codigoCupon+'****'+rutaQR);
		qr.toFile(rutaQR, codigoCupon,function(err){
			if(err)
				reject(err);
		});
		resolve(rutaQR);
	});
}

exports.creaCupon = function(archivoHTML,objDescuentos,direccion){
	var rutaHTMLunlink = null;
	var rutaQRunlink = null;
	var rutaPDF = null;
	
	//console.log(archivoHTML+'\n'+objDescuentos+'\n'+codigoCupon+'\n'+direcPDF+'\n');
	generaQR(objDescuentos.codigo,'').then(function(rutaQR){
		console.log('1.- '+rutaQR);
		var archivoHTML = '';
		if(archivoHTML == ''){
			archivoHTML = 'plantilla.html';
		}
		rutaQRunlink=rutaQR;
		return modificaHTML(archivoHTML,objDescuentos,rutaQR);
	}).then(function(rutaHTML){
		console.log('\n2.- '+rutaHTML);
		rutaHTMLunlink=rutaHTML;
		return leeArchivo(rutaHTML,"utf8").then(function(contenido){
			//console.log("TTTLLL"+contenido);
			return generaPDF(contenido,'test.pdf');
		});
	}).then(function(rutaPDF){
		console.log('3.- '+rutaPDF);
		fs.unlink(rutaHTMLunlink);
		fs.unlink(rutaQRunlink);
	}).catch(function(e){
		console.log(e);
	});
};
