'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


var registry = React.createClass({

  _onPressButtonPOST: function() {
    fetch('http://reto-enarm2.mellow.online:80/api/Users', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  email:"user1003@hotmail.com",
  password:"password",
  })
  })
  console.warn();
      },

  render: function(){
    console.log('registry.render');
    return (
    //  <ReactNative.NavigatorIOS
    //  title: 'Registro' />

      <View style={styles.container}>
<Image source={require('./Resources/casa.png')} style={styles.image}/>
<View style={styles.buttons}>
  <View style={styles.btnWrapper}>
  </View>

  <View style={styles.bigButton}>
  <View style={styles.button1}>
    <TextInput  id="user"  style={styles.button2} placeholder='Usuario'/>
  </View>
  </View>

  <View style={styles.bigButton}>
  <View style={styles.button1}>
    <TextInput secureTextEntry={true} id="password" style={styles.button2} placeholder='Contraseña'/>
  </View>
  </View>

  <View style={styles.bigButton}>
    <TextInput  secureTextEntry={true} id="password2" style={styles.button} placeholder='Repite la contraseña'/>
  </View>

  <TouchableHighlight onPress={this._onPressButtonPOST}  style={styles.buttonc}>
   <Text style={styles.buttonText}>Continuar</Text>
  </TouchableHighlight>

  <View style={styles.buttonf}>
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', color:'rgb(252, 252, 252)', fontSize: 15}}>Iniciar sesión con Facebook</Text>
  </Icon.Button>
  </View>

</View>
</View>
);
}
});

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

  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgb(198, 199, 198)',
    textAlign: 'center',
    fontSize: 14,
    minHeight:37
  },
    button1: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      borderBottomWidth:0,
      borderColor: 'rgb(198, 199, 198)',
      minHeight:37

  },
  button2: {
      fontSize: 14,
      minHeight:37,
      textAlign: 'center',
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
    padding: 9,
    borderRadius: 5

  }
});

module.exports = registry;
