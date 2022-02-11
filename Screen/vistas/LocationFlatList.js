import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LocationFlatList({ navigation, item }) {
    const [residents, setResidents] = useState([])
  useEffect(() => {
    //console.log("si entramos jejeje");
    //console.log(item.id);
    //console.log("SOMOS LOS RESIDENTES  ",(item.residents));
    setResidents(item.residents)
  }, []);
  /* useEffect(()=>{
      //console.log('Veamos quien entra primero');
      residents.map((x)=>{
          console.log(x);
      })
  },[]) */
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
          navigation.navigate('Residents', { residen: residents })

        }}>
        <View style={{ flex: 1, padding: 10, paddingLeft: 17 }}>
        <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Name: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.name}</Text>
          </Text>
          <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Dimension: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.dimension}</Text>
          </Text>
          <Text style={[styles.txtIcono, { fontSize: 14 }]}>
            Type: {'    '}
            <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{item.type}</Text>
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
