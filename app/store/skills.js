
import firebase from '~/utils/firebase/firebase.js';
import end from '~/utils/backend.js'


export const state = () => {

	return {
		aprobados:[],
		enRevision: [],
	}
};

export const mutations = {
	updateAprobados(state,data){
		state.aprobados = data;
	},
	updateEnRevision(state,data){
		state.enRevision = data;
	},
};

export const actions = {
	load (state,localStorage){
		end(localStorage);
		let ref = firebase.database().ref('skills').orderByChild('tipo').equalTo('skill');
		ref.on('value',function (snap) {
			let o = snap.exportVal();
			let arr = [];
			for(let key in o){
				let obj = o[key];
				obj.uid = key;
				obj.verificado = true;
				arr.push(obj)
			}
			state.commit('updateAprobados',arr);
		});
		end.validar.pendientes('skills').then(function (resp) {
			console.log(resp);
			let o = resp.data.data;
			let arr = [];
			for(let key in o){
				let obj = o[key];
				obj.uid = key;
				obj.verificado = false;
				arr.push(obj)
			}
			state.commit('updateEnRevision',arr);
		});

	},
	updateSkill(state,obj) {
		let o = {
			nombre: obj.nombre,
			AKA: obj.AKA,
			versiones: obj.versiones,
			tipo: 'skill'
		};
		return firebase.database().ref('skills').child(obj.uid).update(o);
	},
	newSkill(state,obj) {
		let o = {
			nombre: obj.nombre,
			AKA: obj.AKA,
			versiones: obj.versiones,
			tipo: 'skill'
		};
		return firebase.database().ref('skills').push(o);
	}
};

export const getters = {
	allSkills (state){
		return state.enRevision.concat(state.aprobados);
	}
};
