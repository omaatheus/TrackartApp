import {  Text } from 'react-native';
import { Container, Phrase, Title } from './styles';
import { signOut } from 'firebase/auth';
import { signOutFb, SignUpWithEmail } from '../../../libs/firebase/auth';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from "firebase/auth";
import { useEffect } from 'react';

import { fetchNameUser } from '../../../libs/firebase/db/fechNameUser';
import { Button } from '../../../components/button';
import { ViewButton } from '../../../components/button/styles';

import { AuthNavigationRouteProps } from '../../../routes/auth/auth.routes';

export default function Home(){
    const [name, setName] = useState('')

    const navigation = useNavigation<AuthNavigationRouteProps>();

    function handleGoBack(){
        navigation.goBack();
    }

    async function fetchName(){
        try {
            const result = await fetchNameUser()
            setName(result)
        } catch (error) {
            console.error(error);
            
        }
    }

    async function signOutButton(){
        try {
            const res = await signOutFb()

            if(!res){
                return Error
            }

            navigation.navigate('SignIn')

        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchName()
    }, [])

   
    return(
        <Container>
            <Title>Olá, {name}</Title>
            <Phrase>Seja bem vinda(o) ao nosso app </Phrase>
            <ViewButton>
                <Button title='Sair' onPress={signOutButton}/>
            </ViewButton>
                
        </Container>
    )
}