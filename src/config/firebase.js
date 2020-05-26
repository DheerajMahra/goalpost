import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDoru_aQqh_iB8Evw_JDd12pXCVTxoQflk",
    authDomain: "goalpost-34533.firebaseapp.com",
    databaseURL: "https://goalpost-34533.firebaseio.com",
    projectId: "goalpost-34533",
    storageBucket: "goalpost-34533.appspot.com",
    messagingSenderId: "962262456686",
    appId: "1:962262456686:web:d5db28cc0f9cea226e097f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database()

export default db 