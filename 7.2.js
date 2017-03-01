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

//var FloatLabelTextInput = require('react-native-floating-label-text-input');



class notificaciones extends Component {
render() {

return (

  //   <ReactNative.NavigatorIOS
  //    barTintColor='#9b12f0'
//      titleTextColor='#ffffff'
  //    title: 'NOTIFICACIONES' />

  <View style={styles.container}>

  <View style={styles.buttons}>
  <View style={styles.btnWrapper}>
  </View>

<View style={styles.vistagen}>
  <View style={styles.vista}>
<View style={styles.vista2}>
  <Image source={require('./Resources/mujer1.png')} style={styles.image}/>
  <Text style={styles.Textm}>Nombre {'\n'}<Text style={styles.Textc}>Carrera</Text></Text>
  </View>
  <View style={styles.vista3}>
  <Text style={styles.Textcal}>125/127</Text>
</View>
  </View>

  <View style={styles.vista}>
  <View style={styles.vista4}>
  <Text style={styles.Text}>Cancelar</Text>
</View>
<View style={styles.vista5}>
<Text style={styles.Text}>Ir a desafío</Text>
</View>
</View>
</View>


<View style={styles.vistagen}>
  <View style={styles.vista}>
<View style={styles.vista2}>
<Image source={require('./Resources/mujer1.png')} style={styles.image}/>
  <Text style={styles.Textm}>Nombre {'\n'}<Text style={styles.Textc}>Carrera</Text></Text>
  </View>
  <View style={styles.vista3}>
  <Text style={styles.Textcal}>125/127</Text>
</View>
  </View>

  <View style={styles.vista}>
  <View style={styles.vista4}>
  <Text style={styles.Text}>Cancelar</Text>
</View>
<View style={styles.vista5}>
<Text style={styles.Text}>Ir a desafío</Text>
</View>
</View>
</View>



<View style={styles.vistagen2}>
<View style={styles.vista}>
<View style={styles.vista8}>
<Text style={styles.Text4}>Nombre Invitado</Text>
</View>
<View style={styles.vista9}>
  <Icon style={styles.iconS}
   name="bell"
   pull="center"
   size={20}
   />
</View>
  </View>
  <View style={styles.vista9}>
  <TouchableHighlight style={styles.vista10}>
  <Text style={styles.Text}>Cancelar</Text>
  </TouchableHighlight>

  </View>
</View>

<View style={styles.vistagen3}>
<View style={styles.vista}>
<View style={styles.vista8}>
<Text style={styles.Text4}>Nombre Invitado</Text>
</View>
<View style={styles.vista9}>
  <Icon style={styles.iconS}
   name="bell"
   pull="center"
   size={20}
   />
</View>
  </View>
  <View style={styles.vista9}>
  <TouchableHighlight style={styles.vista10}>
  <Text style={styles.Text}>Cancelar</Text>
  </TouchableHighlight>

  </View>
</View>


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

buttons: {
flex: 3,
paddingLeft: 10,
paddingRight: 10,
width: 300,
alignItems: 'center',
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
    color: '#f9fcff',
    textAlign: 'center',
    marginTop:10,
    fontWeight:'bold'

  },
  Text4: {
    padding:0,
    fontSize: 12,
    color: '#19191a',
    textAlign: 'left',
    marginTop:12,
    fontWeight:'bold',
    marginLeft:14,
    width:150

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


  Textm: {
    padding:0,
    fontSize: 14,
    color: 'rgb(47, 50, 50)',
    textAlign: 'center',
    fontWeight:'bold'
  },
  Textc: {
    padding:0,
    fontSize: 13,
    color: 'rgb(227, 224, 224)',
    textAlign: 'center',
    fontWeight:'bold'
  },

  Textcal: {
    padding:0,
    fontSize: 13,
    color: 'rgb(115, 68, 157)',
    textAlign: 'center',
    fontWeight:'bold',
    marginTop:19
  },
  Text6: {
    fontSize: 13,
    color: '#000000',
    textAlign: 'center',
    fontWeight:'bold',
    marginTop:10
  },
  vista: {
  flexDirection:'row',
  },
  vista2:{
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: 'rgb(214, 214, 214)',
    width:170,
    height:60,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    alignItems:'center',
    flexDirection:'row',
  },
  vista3:{
    borderWidth: 2,
    backgroundColor: '#67e0d5',
    borderColor: 'rgb(214, 214, 214)',
    width:70,
    height:60,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
  },
  vista4: {
    borderWidth: 2,
    backgroundColor: 'rgb(155, 165, 189)',
    borderColor: 'rgb(155, 165, 189)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    height:35,
   width:120,
  },
  vista5: {
    borderWidth: 1.5,
    backgroundColor: 'rgb(115, 68, 157)',
    borderColor: 'rgb(214, 214, 214)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:120,
    height:35,
  },
  vista6: {
    borderWidth: 1.5,
    backgroundColor: '#fefefe',
    borderColor: 'rgb(214, 214, 214)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:240,
    height:35,
  },
  vista7: {
    borderWidth: 1.5,
    backgroundColor: '#bfbfbf',
    borderColor: 'rgb(214, 214, 214)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:240,
    height:35,
  },
  vista8: {
    borderWidth: 2,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    height:35,
   width:120,
  },
  vista9: {
    borderWidth: 1.5,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:120,
    height:35,
  },
  image:{
    width:50,
    height:50,
   borderRadius: 25,
   marginLeft:12,
   marginBottom:17,
   marginTop:19
 },
  vistagen:{
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(214, 214, 214)',
    width:244,
    height:98,
    marginTop:20

  },

  vistagen2:{
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(214, 214, 214)',
    width:244,
    height:75,
    marginTop:20

  },
  vistagen3:{
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'rgb(214, 214, 214)',
    width:244,
    height:75,
    marginTop:13
  },
  iconS: {
  color:'rgb(115, 68, 157)',
  textAlign: 'right',
  marginTop:10,
  marginRight:10
  },
  vista10:{
  borderWidth: 2,
  backgroundColor: 'rgb(155, 165, 189)',
  borderColor: 'rgb(155, 165, 189)',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  borderTopWidth:0,
  height:36,
 width:242,
  }
  });

module.exports = notificaciones;
