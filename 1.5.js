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


class guide extends Component {
render() {
console.log('guide.render');
return (
  //<ReactNative.NavigatorIOS
  //title: 'Guía Gratis' />

<View style={styles.container}>
<Text style={styles.Text}>Reto Universidad es una app{'\n'}que se enfoca en preparar estudiantes a nivel{'\n'}
república para ingresar a la Universidad de su{'\n'}elección.
Ya que existen varios exámenes de{'\n'}ingreso y materias específicas para las diferentes{'\n'}áreas conocimiento,
se recomienda comprar una{'\n'}guía específica para estudiar concrétamente en lo{'\n'}que se cubrirá en el examen seleccionado. </Text>
<View style={styles.buttons}>
<View style={styles.btnWrapper}>
</View>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Comenzar Quiz</Text>
</TouchableHighlight>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Comprar Quiz</Text>
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
    marginTop:30,

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
    backgroundColor: 'rgb(33, 128, 245)',
    borderColor: 'rgb(33, 128, 245)',
    padding: 9,
    marginTop:13
  },
  buttonf: {
    padding: 9,
    marginTop:50,

  }
});

module.exports = guide;
