'use strict';

import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Navigator,
  NavigatorIOS
} from 'react-native';


class general extends Component {

render() {
return (
  //<ReactNative.NavigatorIOS
    //  title: 'Aleatorio' />

<View style={styles.container}>

<Text style={styles.Text}>
<Text style={styles.Text2}> GENERAL{'\n'}</Text>
El examen de ingreso a la UNAM, para el área de ciencias biologicas y de la salud,
consta de una serie de preguntas más enfocadas en fisica, biología etc...</Text>

<View style={styles.buttons}>
<View style={styles.btnWrapper}>
</View>

<TouchableHighlight style={styles.buttonc} >
<View style={styles.vista}>
<Text style={styles.TextB}>Biologia</Text>
 <Text style={styles.TextB}>Dificultad 3</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>MATEMATICAS</Text>
 <Text style={styles.TextB}>Dificultad 2</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>FÍSICA</Text>
 <Text style={styles.TextB}>Dificultad 2</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>QUÍMICA</Text>
 <Text style={styles.TextB}>Dificultad 2</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>ESPAÑOL</Text>
 <Text style={styles.TextB}>Dificultad 1/2</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>HISTORIA UNIVERSAL</Text>
 <Text style={styles.TextB}>Dificultad 1</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>HISTORIA DE MÉXICO</Text>
 <Text style={styles.TextB}>Dificultad 1</Text>
</View>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc2} >
<View style={styles.vista}>
<Text style={styles.TextB}>GEOGRAFIA</Text>
 <Text style={styles.TextB}>Dificultad 1</Text>
</View>
</TouchableHighlight>

<Text style={styles.Text1}>COSTO DE LA GUÍA:{'\n'}<Text style={styles.Text2}>$400 MNX PESOS</Text>
</Text>

<TouchableHighlight style={styles.buttona}>
<Text style={styles.TextA}>Comprar</Text>
</TouchableHighlight>
</View>

</View>

);
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fafafa',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 65,
    bottom: 0,
    alignItems: 'center',
  },
  Text: {
    borderColor: '#95989a',
    borderWidth: .5,
    padding: 10,
    textAlign: 'center',
    color: '#4d4f50',
    fontWeight: 'bold',
    alignSelf:'stretch',
    flexWrap:'wrap',
    fontSize: 12,
  },
  Text2: {
    padding: 10,
    textAlign: 'center',
    color: '#040404',
    fontWeight: 'bold',
    flexWrap:'wrap',
    fontSize: 16,
  },
  Text1: {
    padding: 10,
    textAlign: 'center',
    color: '#95989a',
    fontWeight: 'bold',
    flexWrap:'wrap',
    fontSize: 11 ,
    marginTop:10
  },

  Text2: {
    padding: 10,
    textAlign: 'center',
    color: '#040404',
    fontWeight: 'bold',
    fontSize: 17,
  },
  buttons: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 10,
      width: 360
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnField: {
    flex: 1,
    padding: 4
  },
  buttonc: {
    borderColor: '#b363cf',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#b363cf',
    padding: 9,
    marginTop:20,
    justifyContent:'space-between'
  },
  buttonc2: {
    borderColor: '#b363cf',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#b363cf',
    padding: 9,
    marginTop:3,
    justifyContent:'space-between'
  },

  buttonClick: {
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 9,
    marginTop:7
  },
  buttona: {
    borderColor: 'rgb(20, 116, 235)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgb(20, 116, 235)',
    padding: 9,
    marginTop:19,
  },
  TextB: {
    color: 'white',
    fontWeight: 'bold',
  },
  vista: {
justifyContent:'space-between',
flexDirection:'row'
  },
  TextA: {
    textAlign: 'center',
    color: 'white',
  }

  });
module.exports = general;
