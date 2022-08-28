import {View,Text,Image,FlatList,Pressable,Alert,ToastAndroid,Modal ,TouchableOpacity} from 'react-native';
import {styles,flat} from '../estilos/estilos';
import { useState} from 'react';
import { Escolhido } from './Escolhido';
export const Quadro = ({filme})=>{
  const {showModal,setShowModal} = useState(false);
  const [escolhido,setEscolhido] = useState('');
  console.log(filme)
  return(
    <>
    {/* <Modal  visible={showModal} 
            transparent 
            onRequestClose={()=>
            setShowModal(false)
            }
            animationType='slide'
            hardwareAccelerated
    >
      <Pressable
        onPress={()=>setShowModal(false)}
      >
        <Text>ok</Text>
      </Pressable>
    </Modal> */}
    <Pressable  onPress={()=>setEscolhido(filme)}>
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
      <Modal visible={escolhido}>
        <Escolhido
          escolhido = {escolhido}
        />
          <TouchableOpacity style={styles.iconReturn}  onPress={()=>setEscolhido("")}>
            <Text>voltar</Text>
          </TouchableOpacity>
        
      </Modal>
      </>
  )
}