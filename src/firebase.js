import * as firebase from 'firebase';
import { firebaseConfig } from './config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkDgUaEdhD0zcm_pe7QWKOwb2rFrtZofM",
    authDomain: "react-pwa-81349.firebaseapp.com",
    projectId: "react-pwa-81349",
    storageBucket: "react-pwa-81349.appspot.com",
    messagingSenderId: "361516192373",
    appId: "1:361516192373:web:88d9782619f921faab5e3c"
};

// Initialize Firebase
const app = firebase.default.initializeApp(firebaseConfig);



export default firebase;