import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Episodios from '../vistas/Episodios';

export default function EpisodesGeneral({ navigation }) {
    const [URL, setURL] = useState('https://rickandmortyapi.com/api/episode')
    const [URLNEXT, setURLNEXT] = useState('')
    const [data, setData] = useState('')
    useEffect(() => {
        fetch(URL)
            .then((value) => value.json())
            .then(value => {
                console.log(value.results);
                setURLNEXT(value.info)
                setData(value.results)
            })
    }, [])

    const renderItem = ({ item }) => (
        <Episodios navigation={navigation} item={item} />
    )

    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/rickandmortylogo.png')}
                    style={{ width: '90%', height: '90%' }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ flex: 0.7,  marginBottom: 10 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(id) => id.id}
                />

            </View>
            <View style={{ flex: 0.1, backgroundColor: 'yellow' }}>
{// corregir algunos eerores con los iconos de los botones.
}
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
    header: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
