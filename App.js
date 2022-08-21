import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList ,Image, ImageComponent } from 'react-native';
import {styles,flat} from './estilos/estilos'
import { useState,useEffect } from 'react';
import {Quadro} from './components/Quadro'
export default function App() {
  const [filmes,setFilmes] = useState([])
  const url = 'https://ghibliapi.herokuapp.com'
  useEffect(()=>{
    fetch(`${url}/films`)
    .then(res => res.json())
    .then(data=>{
      data.forEach(movie=>{
        // console.log(movie.title)
        // console.log(movie.description)
        // console.log(movie.release_date)
      })
      setFilmes(data)
    })
    .catch(error => console.log("o erro veio no meu use effect com o fetch, o erro foi: ",error))
    // console.log(filmes)
  },[])
  return (
    <View style={styles.geral}>
      <View style={styles.fundo}>
        <FlatList
          data={filmes}
          renderItem={({item})=>
           <Quadro
            filme = {item}
           />
          }
        />
      </View>
    </View>
   
  );
}
