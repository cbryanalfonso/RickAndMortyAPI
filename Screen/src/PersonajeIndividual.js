import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function PersonajeIndividual({navigation, route}) {
  // sE RECIBEN LOS PARAMETROS DE LA RUTA, PARA QUE DE ESTA MANERA SE PUEDAN CONSULTAR LOS DATOS EN ESTA NUEVA PANTALLA.
  const {item} = route.params;
  const [imageP, setImageP] = useState(
    'https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=21008d2b512da66cd8ce00fe95b7ef86&host=art-gallery-latam.api.hbo.com&w=1280',
  );
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [locationn, setLocationn] = useState('');
  const [vivo, setVivo] = useState(false);
  const [desconocido, setDesconocido] = useState(false);
  useEffect(() => {
    //console.log('SOY YO, ESTOY DENTRO JAJAJAJ',item);
    fetch(item)
      .then(value => value.json())
      .then(value => {
        //console.log(value.origin.name);
        setImageP(value.image);
        setData(value);
        setOrigin(value.origin.name);
        setLocationn(value.location.name);
        if (value.status === 'Alive') {
            setVivo(true);
          } else if (value.status === 'Dead') {
            setVivo(false);
          } else if (value.status === 'unknown') {
            setDesconocido(true);
          }
      });
  });
  return (
    <SafeAreaView style={{flex: 1}}>
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
          <Text style={styles.tituloNombre}>{data.name}</Text>
          <View
            style={{
              width: wp('80%'),
              height: wp('75%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 5,
              marginTop: 10,
              borderColor: '#3498db',
            }}>
            <Image
              source={{uri: imageP}}
              style={{width: wp('90%'), height: wp('70%'), borderRadius: 10}}
              resizeMode="contain"
            />
          </View>
          <View style={{margin: 20, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.txtInformacion}>Status</Text>
              <Text style={styles.txtInformacion}>Species</Text>
              <Text style={styles.txtInformacion}>Gender</Text>
              <Text style={styles.txtInformacion}>Origin</Text>
              <Text style={styles.txtInformacion}>Location</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.txtInfoResul}>
                <Icon
                  name="emoticon-dead"
                  type="material-community"
                  size={14}
                  color="black"
                />
                {data.status}
              </Text>
              <Text style={styles.txtInfoResul}> {data.species}</Text>
              <Text style={styles.txtInfoResul}> {data.gender}</Text>
              <Text style={styles.txtInfoResul}> {origin}</Text>
              <Text style={styles.txtInfoResul}> {locationn}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp('11%'),
    padding: 10,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  iconos: {
    backgroundColor: '#3498db',
    borderRadius: 50 / 2,
    height: hp('7%'),
    width: hp('7%'),
    justifyContent: 'center',
  },
  infoPersonaje: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  tituloNombre: {
    fontSize: 22,
    color: '#3498db',
    fontWeight: 'bold',
  },
  txtInformacion: {
    marginVertical: 5,
    fontSize: 15,
    color: '#3498db',
    fontWeight: 'bold',
  },
  txtInfoResul: {
    marginVertical: 5,
    fontSize: 15,
    color: '#3498db',
  },
});
