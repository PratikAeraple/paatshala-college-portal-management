import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {


  apiKey: "AIzaSyBzwaPivu3W6V7PMovY9-I0IlZeamA8Oz4",
  authDomain: "paatshala-4b709.firebaseapp.com",
  projectId: "paatshala-4b709",
  storageBucket: "paatshala-4b709.appspot.com",
  messagingSenderId: "237969908903",
  appId: "1:237969908903:web:82387b228f4adf9015a782",
  measurementId: "G-20EZ0VNZYG"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;