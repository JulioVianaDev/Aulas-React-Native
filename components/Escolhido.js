import {Text,View,Image, TouchableOpacity} from 'react-native'
import { EstiloEscolhido } from '../estilos/estilos'
export  function Escolhido(props){
  console.log(props)
  return(
    <>
    <View style={EstiloEscolhido.view}>

      <Text style={EstiloEscolhido.titulo}>{props.escolhido.title}</Text>
        <Image
            source={{uri:props.escolhido.movie_banner}}
            style={EstiloEscolhido.image}
            />
        <Text style={EstiloEscolhido.textoGeral}>{props.escolhido.description}</Text>
        <Text style={EstiloEscolhido.textoGeral}>{props.escolhido.director} -  {props.escolhido.release_date}</Text>
        
        <TouchableOpacity onPress={()=>props.setEscolhido("")}>
          <Text style={EstiloEscolhido.voltar}>Voltar</Text>
        </TouchableOpacity>
    </View>

    </>
  )
}