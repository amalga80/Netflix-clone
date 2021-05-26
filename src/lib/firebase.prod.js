import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import  { dDatabase}  from '../seed'
const config={
    apiKey: "AIzaSyAZ_NkvSA49xUjp41SMJBDtdvWYqd2NPHc",
    authDomain: "netflix-a1162.firebaseapp.com",
    projectId: "netflix-a1162",
    storageBucket: "netflix-a1162.appspot.com",
    messagingSenderId: "744788198290",
    appId: "1:744788198290:web:34486d74abc8c13681f74b"
};

const firebase = Firebase.initializeApp(config);

// dDatabase(firebase)

export { firebase };