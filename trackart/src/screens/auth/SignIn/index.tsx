import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text>Screen: SignIn</Text>
      <StatusBar style="auto" />
    </View>
  );
}

