import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import PersonajesLista from "../vistas/PersonajesLista";

export default function Personajes({navigation}) {
    const [data, setData] = useState([])
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/character')
    const [URLNEXT, setURLNEXT] = useState('')

    useEffect(() => {
        fetch(URL)
            .then((value) => value.json())
            .then(value => {
               // console.log(value.info.next);
                setURLNEXT(value.info)
                setData(value.results)
            })
        console.log("Se esta imprimiendo al inicio del renderizado de la aplicación.");
    }, [URL])

    const renderItem = ({ item }) => (
        <PersonajesLista navigation={navigation} item={item} />
    )


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/rickandmortylogo.png")} style={{ width: "90%", height: "90%" }} resizeMode='contain' />
            </View>
            <View style={styles.contenido}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(id) => id.id}
                    //numColumns={2}
                />
            </View>
            <View style={styles.botonesNext}>
                <Icon name='chevron-left-circle'
                    type='material-community'
                    //color='#517fa4'
                    color='#3498db'
                    size={URLNEXT.prev ? 40 : 0}
                    onPress={() => 
                        setURL(URLNEXT.prev)
                    }
                />
                <Icon name='chevron-right-circle'
                    type='material-community'
                    color='#3498db'
                    size={40}
                    onPress={() => 
                        setURL(URLNEXT.next)
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#3498db'
    }
})