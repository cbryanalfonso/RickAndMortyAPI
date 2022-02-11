import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import PersonajePrueba from "./PersonajePrueba";
import PersonajesEpisodios from "./PersonajesEpisodios";
import PersonajesLista from "./PersonajesLista";

export default function Residents({ navigation, route }) {
    const { residen, episodio } = route.params;
    const [residents, setResidents] = useState([])
    //const [character, setCharacter] = useState([])
    const [ver, setVer] = useState(false)
    useEffect(() => {
        //console.log(episodio);
        //console.log('->', residen);
        setResidents(residen)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
               <View style={{alignSelf: "flex-start", marginLeft: 10, marginBottom: -20,  padding: 5, marginTop: 5
                    , borderRadius: 50/2
                }}>
               <Icon
                    type="material-community"
                    name="keyboard-backspace"
                    size={30}
                    color='#3498db'
                   onPress={()=> navigation.goBack()}
                />
               </View>
                <Image source={require("../assets/rickandmortylogo.png")} style={{ width: "80%", height: "80%" }} resizeMode='contain' />
            </View>
            <View style={styles.botonesNext}>
                <Text style={{color: 'black'}}>{episodio.episode ? episodio.episode : episodio.dimension}</Text>
                <Text style={{color: 'black'}}>{episodio.name}</Text>
            </View>
            <View style={styles.contenido}>
                <FlatList
                    data={residents}
                    keyExtractor={item => item.id}
                    renderItem={
                        ({ item, index }) => (
                            <PersonajesEpisodios
                                item={item}
                                navigation={navigation}
                            //select={item.select}
                            //onPress={() => this.changeSelect(index, item.select)}
                            />)
                    }
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        //backgroundColor: 'yellow',
        //DESCARGAR EL RESPONSIVE DE PANTALLA PARA QUE DE ESTA MANERA SE TENGAN TODOS LAS PANTALLAS
        flex: 0.15,
        //padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    contenido: {
        //backgroundColor: 'red',
        flex: 0.79,
        margin: 10,
        /* borderWidth: 1,
        borderRadius: 15,
        borderColor: '#3498db', */
        paddingVertical: 10,
    },
    botonesNext: {
        //backgroundColor: 'yellow', 
        flex: 0.1,
        //flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 5,
       // marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#3498db'
    }
}) 