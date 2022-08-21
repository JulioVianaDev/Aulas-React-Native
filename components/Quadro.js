import {View,Text,Image,FlatList} from 'react-native'
import {styles,flat} from '../estilos/estilos'
export const Quadro = ({filme})=>{
  console.log(filme)
  return(
    <View style={flat.quadro}>
    <Text  style={flat.titulo}>
      {filme.title}
    </Text>
    <Image
      source={{uri:filme.image}}
      style={flat.image}
    />
    <Text  style={flat.titulo}>
      {filme.release_date}
    </Text>
  </View>
  )
}