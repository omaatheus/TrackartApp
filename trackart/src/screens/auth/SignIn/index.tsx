import { Background, Container, ViewInput, styles } from './style';

import { Inputs } from '../../../components/inputs';

import background from '../../../assets/background.png'
import {  Text, TouchableOpacity } from 'react-native';
import { Button } from '../../../components/button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationRouteProps } from '../../../routes/auth/auth.routes';
import { useState } from 'react';
import { SignInWithEmail } from '../../../libs/firebase/auth';

export default function SignIn() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation<AuthNavigationRouteProps>()

  function handleOnRegister(){
    navigation.navigate('SignUp')
  }

  async function handleOnSignIn(){
    try {
      const res = await SignInWithEmail(email, password)
      if(!res){
        return Error
      }
      navigation.navigate('Home')
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <Container>
      <Background source={background}>
      
          <Text style={styles.title}>Entrar</Text>
           <ViewInput>
            <Inputs item='E-mail' onChangeText={setEmail}/>
            <Inputs item='Senha' onChangeText={setPassword}/>
          </ViewInput>

          <Text style={styles.newHere}>
            Novo aqui?
            <TouchableOpacity>
              <Text style={styles.register} onPress={handleOnRegister}>
                  Registre-se
              </Text>
            </TouchableOpacity>
          </Text>
          
          <Button title='Entrar' onPress={handleOnSignIn}/>

        </Background >
      </Container>
  );
}

