import { StatusBar } from 'expo-status-bar';
import { Text, View,   } from 'react-native';
import {styles,} from './estilos/estilos'
import { useState,useEffect } from 'react';
export default function App() {
  const [filmes,setFilmes] = useState([])
  const url = 'https://ghibliapi.herokuapp.com'
  useEffect(()=>{
    fetch(`${url}/films`)
    .then(res => res.json())
    .then(data=>{
      data.forEach(movie=>{
        console.log(movie.title)
        console.log(movie.description)
        console.log(movie.release_date)
      })
      setFilmes(data)
    })
    .catch(error => console.log("o erro veio no meu use effect com o fetch, o erro foi: ",error))
    console.log(filmes)
  },[])
  return (
    <View style={styles.fundo}>
      
    </View>
  );
}
