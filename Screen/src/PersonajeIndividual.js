import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Episodios from '../vistas/Episodios';





export default function PersonajeIndividual({ navigation, route }) {
  // sE RECIBEN LOS PARAMETROS DE LA RUTA, PARA QUE DE ESTA MANERA SE PUEDAN CONSULTAR LOS DATOS EN ESTA NUEVA PANTALLA.
  const { item } = route.params;
  const [imageP, setImageP] = useState(
    'https://hbomax-images.warnermediacdn.com/images/GXkRjxwjR68PDwwEAABKJ/tileburnedin?size=1280x720&partner=hbomaxcom&language=es-419&v=21008d2b512da66cd8ce00fe95b7ef86&host=art-gallery-latam.api.hbo.com&w=1280',
  );
  const [data, setData] = useState([]);
  const [origin, setOrigin] = useState('');
  const [locationn, setLocationn] = useState('');
  const [vivo, setVivo] = useState(false);
  const [desconocido, setDesconocido] = useState(false);
  const [genero, setGenero] = useState(false);
  const [episodios, setEpisodios] = useState([]);
  
  

  useEffect(() => {
    //console.log('SOY YO, ESTOY DENTRO JAJAJAJ',item);
    fetch(item)
      .then(value => value.json())
      .then(value => {
        //console.log(value);
        setImageP(value.image);
        setData(value);
        setOrigin(value.origin.name);
        setLocationn(value.location.name);
        setEpisodios(value.episode);
        if (value.status === 'Alive') {
          setVivo(true);
        } else if (value.status === 'Dead') {
          setVivo(false);
        } else if (value.status === 'unknown') {
          setDesconocido(true);
        }

        if (value.gender === 'Male') {
          setGenero(true);
        } else if (value.gender === 'Female') {
          setGenero(false);
        }
      });
      /* fetch(episodios[0])
      .then((value) => value.json())
      .then(value=>{
        console.log('LOs episodios son ...',value);
      }) */
  }, []);
  
  /* 
const [tt, setTt] = useState([]) */
  /* function episodiosPersonaje() {
    return episodios.map(function (news, i) {
      
      fetch(episodios[i])
      .then((value) => value.json())
      .then(value=>{
        console.log(i)
        //console.log('El valor es ds ', value);
        //setTt(value)
        news= value
      })
      return (
         */
        {/* <TouchableOpacity
          key={i}
          style={{
            backgroundColor: '#2c3e50',
            flex: 1,
            //borderRadius: 25,
            flexDirection: 'row',
            margin: 10,
          }}
          onPress={() => { console.log(news.name); }}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.txtIcono, {  fontSize: 14, padding: 30 }]}>
              {news.name}
            </Text>
 */}
            {/* <Text
              style={[
                styles.txtIcono,
                { color: '#95a5a6', fontSize: 14, paddingTop: 7 },
              ]}>
              {news.episode}
            </Text> */}
          /* </View>
        </TouchableOpacity>
      );
     // console.log(i)
    });
  } */

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
              source={{ uri: imageP }}
              style={{ width: wp('90%'), height: wp('70%'), borderRadius: 10 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ margin: 20, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtInformacion}>Status</Text>
              <Text style={styles.txtInformacion}>Species</Text>
              <Text style={styles.txtInformacion}>Gender</Text>
              <Text style={styles.txtInformacion}>Origin</Text>
              <Text style={styles.txtInformacion}>Location</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.txtInfoResul}>
                <Icon
                  name={
                    desconocido
                      ? 'emoticon-confused'
                      : vivo
                        ? 'emoticon-happy'
                        : 'emoticon-dead'
                  }
                  type="material-community"
                  size={18}
                  color={desconocido ? '#7f8c8d' : vivo ? '#27ae60' : '#c0392b'}
                />
                {data.status}
              </Text>
              <Text style={styles.txtInfoResul}> {data.species}</Text>
              <Text style={styles.txtInfoResul}>
                <Icon
                  name={
                    desconocido
                      ? 'gender-non-binary'
                      : genero
                        ? 'gender-male'
                        : 'gender-female'
                  }
                  type="material-community"
                  size={20}
                  color={
                    desconocido ? '#7f8c8d' : genero ? '#27ae60' : '#9b59b6'
                  }
                />
                {data.gender}
              </Text>
              <Text style={styles.txtInfoResul}>
                <Icon
                  name={'map-marker'}
                  type="material-community"
                  size={20}
                  color={
                    desconocido ? '#7f8c8d' : genero ? '#27ae60' : '#9b59b6'
                  }
                />
                {origin}{' '}
              </Text>
              <Text style={styles.txtInfoResul}>
                <Icon
                  name={'map-marker-outline'}
                  type="material-community"
                  size={20}
                  color={
                    desconocido ? '#7f8c8d' : genero ? '#27ae60' : '#9b59b6'
                  }
                />
                {locationn}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#2980b9',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: 'center',
            padding: 10,
          }}>
            <Text style={[styles.tituloNombre, {color: '#2ecc71'}]}> Episodes </Text>
          {/* <FlatList
          horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={id => id.episode}
          /> */}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/***
 * export default function EpisodiosIndividuales(){
  useEffect(() => {
     episodios.map(function(news, i){
       console.log(news);
     })
  },[])

}
 */




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
    fontSize: 36,
    color: '#3498db',
    fontWeight: 'bold',
    marginBottom: hp('3%'),
  },
  txtInformacion: {
    marginVertical: hp('1.7%'),
    fontSize: 15,
    color: '#3498db',
    fontWeight: 'bold',
  },
  txtInfoResul: {
    marginVertical: hp('1.5%'),
    fontSize: 15,
    color: '#3498db',
  },
  txtIcono: {
    color: 'white',
    fontWeight: 'bold',
  },
});
