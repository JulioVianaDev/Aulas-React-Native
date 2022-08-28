import {View,Text,Image,Pressable,Modal,TouchableOpacity} from 'react-native'
import {styles,flat} from '../estilos/estilos'
import {useState} from 'react'
import { Escolhido } from './Escolhido'
export const Quadro = ({filme})=>{
  // console.log(filme)
  const [escolhido,setEscolhido] = useState('');
  return(
    <> 
      <Pressable onPress={()=>setEscolhido(filme)}>
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
      </Pressable>
      {/* 
        = atribuição ou seja uma tag vai ser igual a outra
        variavel = 12 
        == pergunta 
        variavel == '12' 
        === 
      */}
      {/* Esta parte é sobre o modal , não aparece a não ser que for chamada */}
      <Modal   visible={escolhido != ""} >
        <Escolhido 
          escolhido = {escolhido}
          setEscolhido= {setEscolhido}
        />
      </Modal>
    </>
   
  )
}