import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL8AK6_814LPn-Uy867jakaeQyAyeKoAs",
  authDomain: "paatshala-382cc.firebaseapp.com",
  projectId: "paatshala-382cc",
  storageBucket: "paatshala-382cc.appspot.com",
  messagingSenderId: "298186578182",
  appId: "1:298186578182:web:d10a788b406507375ae687",
  measurementId: "G-68J1B67BPJ" 
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
