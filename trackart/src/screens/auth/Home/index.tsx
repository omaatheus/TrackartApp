import { Container, Phrase, Title } from './styles';
import { signOutFb } from '../../../libs/firebase/auth';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { fetchUserData } from '../../../libs/firebase/db/fetchUserData';
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
            const result: any = await fetchUserData()

            const name = result.name
            setName(name)
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