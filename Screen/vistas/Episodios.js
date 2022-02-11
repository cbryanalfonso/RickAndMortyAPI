import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Episodios({ navigation, item }) {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    //console.log("si entramos jejeje");
    //console.log('Yo soy lo que vengo de episodios general ...',item);
    //console.log(item.characters);
    setCharacter(item.characters)
  }, []);
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: '#2c3e50',
          flex: 1,
          borderRadius: 25,
          flexDirection: 'row',
          margin: 10,
        }}
        onPress={() => {
          //console.log(item.url)
          //console.log('Yo soy lo que vengo de episodios general ...',item);
          navigation.navigate('Residents',{residen: character, episodio: item})
        }}>
        <View style={{ flex: 1, padding: 10, paddingLeft: 17 }}>
          <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Season: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.episode}</Text>
          </Text>
          <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Air Date: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.air_date}</Text>
          </Text>
          <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Episode Name: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.name}</Text>
          </Text>

          <Text
            style={[
              styles.txtIcono,
              { fontSize: 14 },
            ]}>
            Created {'  '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.created}</Text>

          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  txtIcono: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 7
  },
});
