import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import logo from './imagens/logo.png'
import luffy from './imagens/luffy.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá meu primeiro app</Text>
      <View>
        <Text>Olá tudo bem?</Text>
      </View>
      <View>
        <Button title="Go to my github page"
                onPress={()=>{Linking.openURL('https://github.com/JulioVianaDev')}}
        />
      </View>
      <View>
        <Image source={logo} style={{width:250, height: 250}}></Image>
      </View>
      <View>
        <Text>Ver animes</Text>
        <Button title="ir para one piece" 
                onPress={()=>{Linking.openURL('https:onepiece')}}
        />
        <Image source={luffy} style={{width:250, height: 250}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
