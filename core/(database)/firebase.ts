import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const firebaseConfig = {
    apiKey: "AIzaSyC6eh7Lqnb-LYKVsuXJuStbMe08xZjxoQs",
    authDomain: "test-ce067.firebaseapp.com",
    projectId: "test-ce067",
    storageBucket: "test-ce067.appspot.com",
    messagingSenderId: "8187414200",
    appId: "1:8187414200:web:8af3ba670436512f5c164d"
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
