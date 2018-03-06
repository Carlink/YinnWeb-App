/**
 * Created by davo on 8/1/17.
 */
import * as firebase_ from 'firebase' ;
// import * as firebase_ from 'firebase/app' ;
// import 'firebase/database';

const config = {
	apiKey: "AIzaSyASrcvPNyhSlUYTbg0o2g_MFfw5rTdgnS0",
    authDomain: "yinn-7dbd2.firebaseapp.com",
    databaseURL: "https://yinn-7dbd2.firebaseio.com",
    projectId: "yinn-7dbd2",
    storageBucket: "yinn-7dbd2.appspot.com",
    messagingSenderId: "17822749213"
};
if (!firebase_.apps.length) {
	firebase_.initializeApp(config);
}
// const database = firebase.database;
// export {firebase};
// export {database};

export const firebase= {
	state: {
		idToken:''
	},

	mutations: {
		addIdToken(state,newIdToken){
			state.idToken = newIdToken;
		},

	},

	actions: {
		addIdToken(context,newIdToken){
			context.commit('addIdToken',newIdToken);
		}
	},

	getters: {
		getIdToken(state){
			return state.idToken;
		}
	},
	namespaced: true
};
