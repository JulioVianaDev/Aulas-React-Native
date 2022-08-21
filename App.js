import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import { app,flat,textos } from './estilos/estilos';
export default function App() {
  return (
    <View style={app.app}>
      <View style={flat.view1}>
        <Text style={textos.textoflat}>Texto 1</Text>
      </View>
      <View style={flat.view2}>
        <Text style={textos.textoflat}>Texto 2</Text>
      </View>
      <View style={flat.view3}>
        <Text style={textos.textoflat}>Texto 3</Text>
      </View>
      <View style={flat.view4}>
        <Text style={textos.textoflat}>Texto 4</Text>
      </View>
    </View>
  );
}

