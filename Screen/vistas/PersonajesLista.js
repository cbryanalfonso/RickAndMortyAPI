import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function PersonajesLista({ item, navigation }) {
  const [vivo, setVivo] = useState(false);
  const [desconocido, setDesconocido] = useState(false);
  const [data, setData] = useState([]);
  const [placeSeen, setPlaceSeen] = useState('')
  useEffect(() => {
    //console.log(item.url);
    if (item.status === 'Alive') {
      setVivo(true);
    } else if (item.status === 'Dead') {
      setVivo(false);
    } else if (item.status === 'unknown') {
      setDesconocido(true);
    }
    fetch(item.episode[0])
      .then(value => value.json())
      .then(value => {
        //console.log(value.name);
        setPlaceSeen(value.name)
      });
  }, []);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#2c3e50',
        flex: 1,
        //borderRadius: 25,
        flexDirection: 'row',
        margin: 10,
      }}
      onPress={() => {
          //console.log(item.url)
          //PASANDO PARAMETOS A PERSONAJE INDIVIUDAL, PARA QUE DE ESTA MANERA SE PUEDA CONSULTAR DE FORMA DETALLLADA AL PERSONAJE.
        navigation.navigate('PersonajeIndividual',{item: item.url})
      }}
    >
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image
          source={{ uri: item.image }}
          style={{
            width: hp(22),
            height: hp(22),
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{ flex: 1, padding: 10, paddingLeft: 17 }}>
        <TouchableOpacity onPress={() => console.log(item.url)}>
          <Text style={[styles.txtIcono, { fontSize: 15 }]}>{item.name}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
          <Icon
            name={
              desconocido
                ? 'emoticon-confused'
                : vivo
                  ? 'emoticon-happy'
                  : 'emoticon-dead'
            }
            type="material-community"
            size={14}
            color={desconocido ? '#7f8c8d' : vivo ? '#27ae60' : '#c0392b'}
          />
          <Text style={[styles.txtIcono, { fontSize: 12 }]}>  {item.status} - </Text>
          <Text style={[styles.txtIcono, { fontSize: 12 }]}> {item.species}</Text>
        </View>
        <Text style={[styles.txtIcono, { color: '#95a5a6', fontSize: 14 }]}>Last Know location</Text>
        <TouchableOpacity>
          <Text style={[styles.txtIcono, { fontSize: 13 }]}>{item.location.name}</Text>
        </TouchableOpacity>
        <Text style={[styles.txtIcono, { color: '#95a5a6', fontSize: 14, paddingTop: 7 }]} >First seen in</Text>
        <Text style={[styles.txtIcono, { fontSize: 13 }]}>{placeSeen}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txtIcono: {
    color: 'white',
    fontWeight: 'bold',
  },
});

/*** <Image source={{uri: data.image}} style={{width: 160, height:160, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} resizeMode='contain' />
 */

/**
 * 
 * 
 * useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((value) => value.json())
            .then(value => {
                console.log(value.results[0]);
                console.log(value.results[0].image);
                setData(value.results[0])
            })
        console.log("Se esta imprimiendo al inicio del renderizado de la aplicación.");
    }, [])
 */
