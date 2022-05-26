import firebase from 'firebase/app'
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDNzEvwb_6YZKCP_gJhxtJlLNgNVupcC-s",
    authDomain: "the-foresight-journal.firebaseapp.com",
    projectId: "the-foresight-journal",
    storageBucket: "the-foresight-journal.appspot.com",
    messagingSenderId: "992639136524",
    appId: "1:992639136524:web:ca93796f8b692bf7228f29",
    measurementId: "G-TMKBD7VPP0"
};

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {}

export const auth = getAuth();
export const firestore = getFirestore();
export const storage = getStorage();