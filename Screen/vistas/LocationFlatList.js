import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LocationFlatList({ navigation, item }) {
  useEffect(() => {
    //console.log("si entramos jejeje");
    console.log(item);
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
