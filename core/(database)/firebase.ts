import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
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

const signOut = () => {
    const router = useRouter();
    try {
        auth.signOut();
        toast.success('Signed out successfully');
        router.push('/dashboard');
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
