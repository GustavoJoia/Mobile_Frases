import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import rangePicker from './util/rangePicker';

export default function App() {

  const [phrase,setPhrase] = useState('Opa')
  const [list,setList] = useState([
  "Vai que dá errado!",
  "Sorte é treino.",
  "Meta: sobreviver.",
  "Amanhã eu começo.",
  "Tá ruim, mas tá indo.",
  "Segue o caos.",
  "Só vai (ou não).",
  "Motivado a desistir.",
  "Confia no improviso.",
  "Força, guerreirinho."
])


  return (
    <View style={style.app}>
      <Text style={style.phrase}>FRASES</Text>
      <View style={style.card}>
        <Text style={style.cardText}>{phrase}</Text>
      </View>
      <View style={style.row}>
        <Pressable style={style.btn} onPress={()=>{
          setPhrase(list[rangePicker(0,list.length-1)])
        }}>
          <Text style={style.btnLabel}>Gerar</Text>
        </Pressable>
        <Pressable style={style.btn} onPress={()=>{
          setPhrase('')
        }}>
          <Text style={style.btnLabel}>Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300
  },
  phrase:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  card:{
    backgroundColor: '#939393ff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 350,
    height: 140
  },
  cardText:{
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  btn:{
    backgroundColor: '#939393ff',
    borderRadius: 5,
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 100,
    height: 40,
  },
  btnLabel:{
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  },
});
