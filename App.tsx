import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Botao from './componentes/botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello world!</Text>
      <Botao titulo="Clique aqui" onPress={()=>{Alert.alert("Atenção", "Botão clicado")}}></Botao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    elevation: 10,
  },
  titulo: {
    color: '#000',
    fontSize: 20,
  },
});
