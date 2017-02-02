'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

var styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgb(240, 235, 235)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 60,
    bottom: 0,
    alignItems: 'center',
  },

  image: {
  width: 216,
  height: 138,
  justifyContent: 'center',
  alignItems: 'center'
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

flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
  buttonText: {
  fontSize: 14,
  color: 'white',
  alignSelf: 'stretch',

},
btnField: {
  flex: 1,
  padding: 4
},
button: {
  height: 36,
  flex: 4,
  flexDirection: 'row',
  backgroundColor: 'rgb(20, 116, 235)',
  borderColor: 'rgb(20, 116, 235)',
  borderWidth: 1,
  borderRadius: 12,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center',

},
searchInput: {
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 14,
  borderWidth: 1,
  borderColor: 'rgb(198, 199, 198)',
  borderRadius: 12,
  color: '#48BBEC',
  marginBottom: 10

}
});



class reto_universidad extends Component {
  render() {
    console.log('reto_universidad.render');
    return (

      <View style={styles.container}>
<Image source={require('./Resources/casa.png')} style={styles.image}/>
        <View style={styles.flowRight}>
        <View style={styles.btnWrapper}>


         <TextInput
          style={styles.searchInput}
          placeholder='Usuario'/>


          <TextInput
           style={styles.searchInput}
           placeholder='Contraseña'/>
          <TouchableHighlight style={styles.button}>
           <Text style={styles.buttonText}>Continuar</Text>
          </TouchableHighlight>
          </View>
        </View>
      </View>

    );
  }
}
