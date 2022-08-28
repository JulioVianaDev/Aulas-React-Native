import { StyleSheet  } from "react-native";
export const styles = StyleSheet.create({
 fundo:{
  backgroundColor: '#323E40',
  flex: 1
 },
 geral:{
  alignItems:'center',
  flex:1,
  backgroundColor: '#323E40',
 }
  
});
export const flat = StyleSheet.create({
  image:{
    width: 300,
    height: 500,
    borderRadius:6,
  },
  quadro:{
    backgroundColor: '#732002',
    width: 350,
    margin: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  titulo:{
    fontFamily: 'normal',
    fontSize:24,
    color: '#F2A922'
  }
})

export const EstiloEscolhido = StyleSheet.create({
  titulo:{
    fontFamily: 'normal',
    fontSize: 24,
    color: '#F2A922',
  },
  view:{
    backgroundColor: '#732002',
    flex: 1,
    alignItems: 'center',
  },
  image:{
    width: 400,
    height: 250,
    borderRadius:6,
  },
  textoGeral:{
    fontFamily: 'normal',
    fontSize: 18,
    color: '#F2A922',
  },
  voltar:{
    color: "#fff",
    fontSize: 20,
  }
})
