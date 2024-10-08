import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "../config";
export async function fetchUserData(){
    const auth = getAuth(app)
    const db = getFirestore(app)
    const user = auth.currentUser;

    try {
        
        if( !user){
            throw new Error 
        }

        const userUid = user.uid

        const userDocRef = doc(db, 'users', userUid);
        const userDocSnapshot = await getDoc(userDocRef)

        if(!userDocSnapshot.exists()){
            console.log('Usuário Não Encontrado');
        }

        const userData: any = userDocSnapshot.data()

        const dataUser: {} = userData
        
        return dataUser;

    } catch (error) {
        console.error(error)
    }
}