import { Background, Container, ViewInput, styles } from './style';

import { Inputs } from '../../../components/inputs';

import background from '../../../assets/background.png';
import { Text, TouchableOpacity } from 'react-native';
import { Button } from '../../../components/button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationRouteProps } from '../../../routes/auth/auth.routes';
import { useState } from 'react';
import { SignUpWithEmail } from '../../../libs/firebase/auth';

export default function SignUp() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')

  const navigation = useNavigation<AuthNavigationRouteProps>()

  function handleOnRegister(){
    navigation.navigate("SignIn")
  }

  async function handleOnSignUp(){
    try {
      const res = await SignUpWithEmail(email, password, name)
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
      
          <Text style={styles.title}>Cadastrar</Text>
           <ViewInput>
           <Inputs item='Nome' onChangeText={text => setName(text)}/>
           <Inputs item='E-mail' onChangeText={text => setEmail(text)}/>
            <Inputs item='Senha' onChangeText={text => setPassword(text)}/>
          </ViewInput>

          <Text style={styles.newHere}>
            Tem conta?
            <TouchableOpacity>
              <Text style={styles.enter} onPress={handleOnRegister}>
                  Entrar.
              </Text>
            </TouchableOpacity>
          </Text>
          
          <Button title='Cadastrar' onPress={() => handleOnSignUp()}/>

        </Background >
      </Container>
  );
}

