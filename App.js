import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import rangePicker from './util/rangePicker';

export default function App() {

  const [phrase,setPhrase] = useState('Opa')
  const [list,setList] = useState([
  "Se nada der certo, pelo menos você tentou… abrir o pacote errado.",
  "Acredite em você, porque até o Wi-Fi às vezes conecta do nada.",
  "Levante-se! A cama vai estar lá quando você voltar.",
  "Se a vida te derrubar, aproveita e já procura uma moeda no chão.",
  "Foco, força e… se der preguiça, amanhã você tenta de novo.",
  "Siga seus sonhos, mesmo que eles só queiram dormir mais 5 minutinhos.",
  "Nada é impossível… exceto abrir pote de azeitona sem ajuda.",
  "Continue! Porque desistir dá mais trabalho explicar depois.",
  "Você é forte, igual aquele cabo USB que aguenta anos de puxão.",
  "A vida é curta, então sorria… antes que a bateria acabe."
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
    padding: 5
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
    padding: 2,
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
