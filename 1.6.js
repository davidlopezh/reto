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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';



class subjects extends Component {
render() {
console.log('guide.render');
return (

  //<ReactNative.NavigatorIOS
  //title: 'Físico Matemáticas e Ing.' />

<View style={styles.container}>
<Text style={styles.Text1}>UNAM</Text>
<Text style={styles.Text}>Reto Universidad es una app{'\n'}que se enfoca en preparar estudiantes a nivel república{'\n'}
para ingresar a la Universidad de su elección.</Text>

<View style={styles.buttons}>
<View style={styles.btnWrapper}>
</View>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Desafío</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Quiz por Materia</Text>
</TouchableHighlight>


<View style={styles.vista}>
<TouchableHighlight style={styles.buttonm3}>
<Text style={styles.Textm}>Español</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonm4}>
<Text style={styles.Textm}>Matemáticas</Text>
</TouchableHighlight>

</View>
<View style={styles.vista}>
<TouchableHighlight style={styles.buttonm2}>
<Text style={styles.Textm}>Historia de México</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonm3}>
<Text style={styles.Textm}>Física</Text>
</TouchableHighlight>
</View>

<View style={styles.vista}>
<TouchableHighlight style={styles.buttonm3}>
<Text style={styles.Textm}>Biología</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonm4}>
<Text style={styles.Textm}>Historia Universal</Text>
</TouchableHighlight>
</View>


<TouchableHighlight style={styles.buttonI}>
<Text style={styles.buttonText}>Iniciar</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Quiz Aleatorio</Text>
</TouchableHighlight>

</View>
</View>
);
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 65,
    bottom: 0,
    alignItems: 'center',
  },
  buttonText: {
  fontSize: 14,
  color: 'white',
  alignSelf: 'stretch',
  textAlign: 'center'
},
buttons: {
flex: 3,
paddingLeft: 10,
paddingRight: 10,
width: 300
  },
btnWrapper: {
flexDirection: 'row',
justifyContent: 'space-between'
  },
  btnField: {
    flex: 1,
    padding: 4
  },

  bigButton: {
    padding:0
  },

  Text: {
    padding:0,
    fontSize: 14,
    color: 'rgb(15, 19, 23)',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop:15,

  },

  Text1: {
    padding:0,
    fontSize: 14,
    color: 'rgb(4, 5, 5)',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop:15,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(198, 199, 198)',
    textAlign: 'center',
    fontSize: 14,
    minHeight:37
  },

  buttonc: {
    borderColor: '#95989a',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgb(75, 150, 242)',
    borderColor: 'rgb(75, 150, 242)',
    padding: 9,
    marginTop:10
  },
  buttonm: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(83, 85, 87)',
    marginTop:13,
    width:120,
    padding: 9,
  },
  buttonm2: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(83, 85, 87)',
    marginTop:9,
    width:145,
    padding: 9,
  },
  buttonm3: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(83, 85, 87)',
    marginTop:10,
    width:120,
    padding: 9,
  },
  buttonm4: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(83, 85, 87)',
    marginTop:9,
    width:145,
    padding: 9,
  },
  buttonI: {
    borderColor: '#95989a',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgb(13, 94, 195)',
    borderColor: 'rgb(13, 94, 195)',
    padding: 9,
    marginTop:10
  },
  Textm: {
    padding:0,
    fontSize: 14,
    color: 'rgb(47, 50, 50)',
    textAlign: 'center',
  },

  vista: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  buttonf: {
    padding: 9,
    marginTop:50,

  }
});
module.exports = subjects;
