import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { toast } from 'sonner';

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

const signInWithProvider = (providerName: 'google' | 'github', router) => {
    const provider = providerName === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(`User ${user.displayName} logged in with ${providerName}.`);
            toast.success(`Welcome ${user.displayName}!`);
            router.push('/dashboard');
        })
        .catch((error) => {
            console.error(error);
            toast.warning('something went wrong');
        });
};


export default signInWithProvider;

const signOut = async () => {
    try {
        await auth.signOut();
        toast.success('Signed out successfully');
    } catch (e) {
        console.error(e);
        toast.warning('something went wrong');
    }
}

const signUp = async (name: string, email: string, password: string) => {
    let result = null;
    let error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        if (result?.user) {
            await updateProfile(result.user, {
                displayName: name,
            });
        }
    } catch (e) {
        error = e;
    }

    return { result, error };
};


export { auth, db, firestore, googleAuthProvider, signOut, signUp, storage };
