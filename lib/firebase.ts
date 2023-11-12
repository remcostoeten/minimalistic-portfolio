import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { addDoc, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCabh0AJrarpPaYX4WGowZeor3YQ9809mw",
    authDomain: "portfolio---debt.firebaseapp.com",
    projectId: "portfolio---debt",
    storageBucket: "portfolio---debt.appspot.com",
    messagingSenderId: "413639141078",
    appId: "1:413639141078:web:c2ee1dd283d1ac3b1bcb77"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, firestore, storage, googleAuthProvider, db };