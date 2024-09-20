import app from '../config'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
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

        return console.log('Deu certo!');
        

    } catch (error) {
        console.error(error);
        
    }
}