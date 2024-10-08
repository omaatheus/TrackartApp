import app from '../config'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {  getFirestore, doc, setDoc  } from 'firebase/firestore'

const auth = getAuth(app)
const db = getFirestore(app)

export async function SignUpWithEmail(email: string, password: string, nome: string) {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)

        const userUid = response.user.uid

        await setDoc(doc(db, "users", userUid), {
            createdAt: new Date(),
            name: nome,
            email: email,
            senha: password,
            uid: userUid,
        })

        return true
        
    } catch (error) {
        console.error(error);
    }
}

export async function SignInWithEmail(email: string, password: string) {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)

        if(!response.user){
            return Error
        }

        return response.user
        

    } catch (error) {
        console.error(error);
    }
}

export async function signOutFb(){
    try {
        await signOut(auth)

        return true
        
    } catch (error) {
        console.error(error);
        
    }
}