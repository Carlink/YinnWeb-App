/**
 * Created by davo on 7/24/17.
 */

import * as firebase from 'firebase/app' ;
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: "AIzaSyASrcvPNyhSlUYTbg0o2g_MFfw5rTdgnS0",
    authDomain: "yinn-7dbd2.firebaseapp.com",
    databaseURL: "https://yinn-7dbd2.firebaseio.com",
    projectId: "yinn-7dbd2",
    storageBucket: "yinn-7dbd2.appspot.com",
    messagingSenderId: "17822749213"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;
