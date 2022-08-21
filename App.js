import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image, TextInputBase } from 'react-native';
import {styles,textos,button,} from './estilos/estilos'
import { useState } from 'react';
export default function App() {
  const usuario = 'Tomate batata'
  const [estado,setEstado] = useState('Não me mude por favor') 
  const [verdadeiro,setVerdadeiro] = useState(false)
  const [Items,setItems] = useState([
    {key: 1, item: 'sapato'},
    {key: 2, item: 'tenis'},
    {key: 3, item: 'chinelo'},
    {key: 4, item: 'sandalha'},
    {key: 5, item: 'sapatilha'},
    {key: 6, item: 'bota'},
    {key: 7, item: 'coturno'},
  ])

  const Clicado=()=>{
    setItems([...Items, {key: 8, item: 'Sapato da cinderela'}])
  }
  return (
    <View style={styles.body}>
      <Text style={textos.description}> oi {usuario}</Text>
      <Text style={textos.description}> {estado}</Text>
      <Button style={button.button} 
              onPress={()=>setEstado('Já mudei o resultado')}
              title='Pressione se quiser mudar'
      />
      <Text style={textos.description}>{verdadeiro ? 'Sim voce está certo' : 'Você está errado' }</Text>
    <Button style={button.button} 
            onPress={()=>setVerdadeiro(true)}
            title='está certo?'
    />
          {
            Items.map((objeto)=>{
              return(
                <View style={styles.item} key={objeto.key}>
                  <Text style={textos.description}>{objeto.item}</Text>
                </View>
              )
            })
          }
          <Button style={button.button}
                  onPress={()=>Clicado()}
                  title='acidionar item'
          />
    </View>
  );
}
