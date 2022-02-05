import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";


export default function PersonajesLista({ item }) {
    const [vivo, setVivo] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
       // console.log(item.episode);
        if(item.status === "Alive"){
            setVivo(true)
        }else if(item.status==="Dead"){
            setVivo(false)
        }else{
            setVivo(true)
        }
        fetch(item.episode)
        .then((value)=>value.json())
        .then(value =>{
            console.log(value.name);
        })
    }, [])


    return (
        <TouchableOpacity style={{ backgroundColor: '#2c3e50', flex: 1, borderRadius: 20, flexDirection: "row", margin: 10, }}>
            <View style={{ flex: 0.8 }}>
            <Image source={{uri: item.image}} 
            style={{width: 160, height:160, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} resizeMode='contain' />
            </View>
            <View style={{ flex: 1.2, padding: 10, paddingLeft: 30 }}>
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginVertical: 10, }}>
                    <Icon
                        name={vivo ? "emoticon-happy" : "emoticon-dead"}
                        type="material-community"
                        size={15}
                        color={vivo ? "#27ae60" : "#c0392b"}
                    />
                    <Text>  {item.status}  - </Text>
                    <Text> {item.species}</Text>
                </View>
                <Text>Last Know location</Text>
                <TouchableOpacity>
                    <Text>{item.location.name}</Text>
                </TouchableOpacity>
                <Text>First place seen</Text>
                <Text>Lugar</Text>
            </View>
        </TouchableOpacity>
    );
}

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