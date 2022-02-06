import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import PersonajesLista from "../vistas/PersonajesLista";

export default function Personajes() {
    const [data, setData] = useState([])
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/character')

    useEffect(() => {
        fetch(URL)
            .then((value) => value.json())
            .then(value => {
                //console.log(value.results[0].name);
                setData(value.results)

            })
        console.log("Se esta imprimiendo al inicio del renderizado de la aplicación.");
    }, [])

    const renderItem = ({ item }) => (
        <PersonajesLista item={item} />
    )


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/rickandmortylogo.png")} style={{ width: "80%", height: "80%" }} />
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
                    size={40}
                    onPress={() => console.log("Anterior")}
                />
                <Icon name='chevron-right-circle'
                    type='material-community'
                    color='#3498db'
                    size={40}
                    onPress={() => console.log("Siguiente")}
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
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    contenido: {
        //backgroundColor: 'red',
        flex: 0.75,
        margin: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#3498db'
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