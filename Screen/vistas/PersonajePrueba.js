import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function PersonajePrueba({item, navigation}){
    useEffect(()=>{
        console.log("Pasando los datos amigos mios ...",item);
    },[])
    return(
        <View>
            <Text>sfsdfdsf</Text>
        </View>
    );
}