import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyByrNI-d9eM_3KAJLI_Fnyfddz8OnMyMyM",
    authDomain: "crown-database-f0c61.firebaseapp.com",
    databaseURL: "https://crown-database-f0c61.firebaseio.com",
    projectId: "crown-database-f0c61",
    storageBucket: "crown-database-f0c61.appspot.com",
    messagingSenderId: "879385386392",
    appId: "1:879385386392:web:8ae99f5d905e2cc3d09fed"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;