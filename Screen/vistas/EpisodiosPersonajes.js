import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EpisodiosPersonajes({navigation, item }) {
    const [episode, setEpisode] = useState([])
    const [character, setCharacter] = useState([])
    useEffect(() => {
        //console.log(item);
        fetch(item)
        .then((value)=> value.json())
        .then(value=>{
            console.log("DENTRO DE EPISODIOS PERSONAJES SE PASA ->",value);
            setEpisode(value)
            setCharacter(value.characters)
        })
    },[])
    return (
        <>
            <TouchableOpacity
                style={{
                    backgroundColor: '#2c3e50',
                    flex: 1,
                    borderRadius: 25,
                    flexDirection: 'row',
                    margin: 10,
                    width: '95%'
                }}
                onPress={() => {
                    navigation.navigate('Residents', {residen: character, episodio: episode} )

                }}>
                <View style={{ flex: 1, padding: 10, paddingLeft: 17 }}>
                    <Text style={[styles.txtIcono, { fontSize: 14 }]}>
                        Season: {'    '}
                        <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{episode.episode}</Text>
                    </Text>
                    <Text style={[styles.txtIcono, { fontSize: 14 }]}>
                        Air Date: {'    '}
                        <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{episode.air_date}</Text>
                    </Text>
                    <Text style={[styles.txtIcono, { fontSize: 14 }]}>
                        Episode Name: {'    '}
                        <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{episode.name}</Text>
                    </Text>

                    <Text
                        style={[
                            styles.txtIcono,
                            { fontSize: 14 },
                        ]}>
                        Created {'  '}
                        <Text style={[styles.txtIcono, { fontSize: 13, color: '#95a5a6' }]}>{episode.created}</Text>
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