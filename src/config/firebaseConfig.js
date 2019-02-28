import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqFkstyRX6aZ08Qz5emp9eaoZPj-SvfVs",
  authDomain: "uprzejmiedonosze991.firebaseapp.com",
  databaseURL: "https://uprzejmiedonosze991.firebaseio.com",
  projectId: "uprzejmiedonosze991",
  storageBucket: "uprzejmiedonosze991.appspot.com",
  messagingSenderId: "536008581792"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
