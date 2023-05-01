import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider(); 



export const signInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);  

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, 
            email, 
            photoURL, 
            uid
        }

    } catch (error) {
        
        const errorMessage = error.message;
    
        return {
            ok: false,
            errorMessage,
        }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName });   //Actualizar el name en firebase

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }

}


export const loginWithEmailPassword = async({ email, password }) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        
        const { uid, photoURL, displayName } = resp.user;

        return { ok: true, uid, photoURL, displayName }

    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}



export const logoutFirebase = async () => await FirebaseAuth.signOut();



export const resetPasswordEmail = async ({ email }) => {
    try {
        await sendPasswordResetEmail(FirebaseAuth, email);

        return {
            ok: true,
        };
    } catch (error) {
        return { ok: false, errorMessage: error.message };
    }
};
