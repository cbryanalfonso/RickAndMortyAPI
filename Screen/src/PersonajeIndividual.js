import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function PersonajeIndividual({ navigation, route }) {
    // sE RECIBEN LOS PARAMETROS DE LA RUTA, PARA QUE DE ESTA MANERA SE PUEDAN CONSULTAR LOS DATOS EN ESTA NUEVA PANTALLA.
    const { item } = route.params;
    const [imageP, setImageP] = useState('https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=21008d2b512da66cd8ce00fe95b7ef86&host=art-gallery-latam.api.hbo.com&w=1280')
    useEffect(() => {
        //console.log('SOY YO, ESTOY DENTRO JAJAJAJ',item);
        fetch(item)
            .then((value) => value.json())
            .then(value => {
                console.log(value.image);
                setImageP(value.image)
            })
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.header}>
                    <Icon
                        type="material-community"
                        name="keyboard-backspace"
                        size={30}
                        color="black"
                        style={styles.iconos}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={styles.infoPersonaje}>
                    <Text style={styles.tituloNombre}>Nombre del personaje</Text>
                    <View style={{ width: wp('80%'), height: wp('75%'), alignItems: "center", justifyContent: "center", borderWidth: 5, marginTop: 10,borderColor: '#3498db' }}>
                        <Image source={{ uri: imageP }} style={{ width: wp('90%'), height: wp('70%'),  borderRadius: 10 }} resizeMode="contain" />

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: {
        height: hp("11%"),
        padding: 10,
        alignItems: "flex-start",
        paddingLeft: 30,
    },
    iconos: {
        backgroundColor: '#3498db',
        borderRadius: 50 / 2,
        height: hp('7%'),
        width: hp('7%'),
        justifyContent: "center"
    },
    infoPersonaje: {
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    tituloNombre: {
        fontSize: 22,
        color: '#3498db',
        fontWeight: 'bold'
    }
})