import config from '../config.js';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
};

// console.log(JSON.stringify(firebaseConfig));

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const database = firebase.database();

export default {
  database
}
