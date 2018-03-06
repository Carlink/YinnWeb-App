/**
 * Created by davo on 7/24/17.
 */

module.exports = () =>{
    import * as firebase from "firebase";
    const config = {
        apiKey: "AIzaSyBdvJNvsnkt0RpATNoob210uON_Lphc4Ro",
        authDomain: "proyecto-morelos.firebaseapp.com",
        databaseURL: "https://proyecto-morelos.firebaseio.com",
        projectId: "proyecto-morelos",
        storageBucket: "proyecto-morelos.appspot.com",
        messagingSenderId: "582895394047"
    };
    return firebase.initializeApp(config);
};