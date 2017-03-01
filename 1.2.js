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




class login extends Component {
render() {
console.log('login.render');
return (

  //<ReactNative.NavigatorIOS
  //    title: 'Iniciar Sesión' />


<View style={styles.container}>
<Image source={require('./Resources/casa.png')} style={styles.image}/>
<View style={styles.buttons}>
<View style={styles.btnWrapper}>
</View>
<View style={styles.bigButton}>

<TextInput style={styles.button}placeholder='Usuario'/>
</View>
<View style={styles.bigButton}>
<TextInput style={styles.button} placeholder='Contraseña'/>

</View>
<TouchableHighlight style={styles.buttonc}>
<Text style={styles.buttonText}>Continuar</Text>
</TouchableHighlight>
<Text style={styles.Text}>¿Olvidaste tu contraseña? </Text>


<View style={styles.buttonf}>
<Icon.Button name="facebook" backgroundColor="#3b5998">
  <Text style={{fontFamily: 'Arial', color:'rgb(252, 252, 252)', fontSize: 15}}>Iniciar sesión con Facebook</Text>
</Icon.Button>
</View>

<Text style={styles.Textf}>¿Aún no tienes cuenta? <Text style={styles.Textf1}> Regístrate </Text></Text>


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
Text: {
fontSize: 14,
color: 'black',
alignSelf: 'stretch',
textAlign: 'center',
marginTop:2
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
  Textf: {
    padding:0,
    fontSize: 14,
    color: 'black',
    alignSelf: 'stretch',
    textAlign: 'center',
      marginTop:150
  },

  Textf1: {
    padding:0,
    fontSize: 14,
    color: 'rgb(20, 116, 235)',
    alignSelf: 'stretch',
    textAlign: 'center',
      marginTop:150
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
    backgroundColor: 'rgb(20, 116, 235)',
    borderColor: 'rgb(20, 116, 235)',
    padding: 9,
    marginTop:10
  },
  buttonf: {
    padding: 9,
    marginTop:50,

  }
});

module.exports = login;
