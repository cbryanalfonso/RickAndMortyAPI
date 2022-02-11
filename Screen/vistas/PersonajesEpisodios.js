import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function PersonajesEpisodios({item, navigation}) {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);
  const [firstEpisode, setFirstEpisode] = useState([]);
  useEffect(() => {
    //console.log(item);
    fetch(item)
      .then(value => value.json())
      .then(value => {
        //console.log("Son los valores ->", value.episode[0]);
        setData(value);
        setLocation(value.location.name);
        //setFirstEpisode(value.episode[0])
        fetch(value.episode[0])
          .then(v => v.json())
          .then(v => {
            //console.log('Primer episodio -> ', v.name);
            setFirstEpisode(v.name);
          });
      });
    //console.log('Primer episodio -> ', firstEpisode);
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
        // navigation.navigate('PersonajeIndividual', { item: item.url })
      }}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={{uri: data.image}}
          style={{
            width: hp(22),
            height: hp(22),
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1, padding: 10, paddingLeft: 17}}>
        <TouchableOpacity onPress={() => console.log(data.url)}>
          <Text style={[styles.txtIcono, {fontSize: 15}]}>{data.name}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Text style={[styles.txtIcono, {fontSize: 12}]}>
            {' '}
            {data.status} -{' '}
          </Text>
          <Text style={[styles.txtIcono, {fontSize: 12}]}> {data.species}</Text>
        </View>
        <Text style={[styles.txtIcono, {color: '#95a5a6', fontSize: 14}]}>
          Last Know location
        </Text>
        <TouchableOpacity>
          <Text style={[styles.txtIcono, {fontSize: 13}]}>{location}</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.txtIcono,
            {color: '#95a5a6', fontSize: 14, paddingTop: 7},
          ]}>
          First seen in
        </Text>
        <Text style={[styles.txtIcono, {fontSize: 13}]}>{firstEpisode}</Text>
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
