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
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
exports.displayName = (undefined: ?string);
exports.title = '<ScrollView>';
exports.description = 'Component that enables scrolling through child components';

//var FloatLabelTextInput = require('react-native-floating-label-text-input');



class busqueda extends Component {
render() {
  var _scrollView: ScrollView;
return (

  //   <ReactNative.NavigatorIOS
  //    barTintColor='#9b12f0'
//      titleTextColor='#ffffff'
  //    title: 'SELECCIONA TU ADVERSARIO' />

  <View style={styles.container}>

  <View style={styles.buttons}>
  <View style={styles.btnWrapper}>
  </View>

<ScrollView  automaticallyAdjustContentInsets={false} pagingEnabled={true}>
<View style={styles.vistagen}>
  <View style={styles.vista}>
<View style={styles.vista2}>
  <Image source={require('./Resources/mujer1.png')} style={styles.image}/>
  <Text style={styles.Textm}>Nombre {'\n'}<Text style={styles.Textc}>Carrera</Text></Text>
  </View>
  <View style={styles.vista3}>
  <Text style={styles.Textcal}>#URI{'\n'}1.8835</Text>
</View>
  </View>

  <View style={styles.vista}>
  <View style={styles.vista4}>
  <Text style={styles.Textcan}>Promedio por pregunta: 0 seg.</Text>
</View>
<View style={styles.vista5}>
<Text style={styles.Text}>10/10</Text>
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
  <Text style={styles.Textcal}>#URI{'\n'}1.8835</Text>
</View>
  </View>

  <View style={styles.vista}>
  <View style={styles.vista4}>
  <Text style={styles.Textcan}>Promedio por pregunta: 0 seg.</Text>
</View>
<View style={styles.vista5}>
<Text style={styles.Text}>10/10</Text>
</View>
</View>
</View>
 </ScrollView>

  </View>
  </View>
  );
  }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgb(239,239,239)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
    alignItems: 'center',
    justifyContent:'space-between'
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
    fontSize: 12,
    color: 'rgb(98, 119, 158)',
    textAlign: 'center',
    marginTop:10,
    fontWeight:'bold'

  },
  Textcan: {
    padding:0,
    fontSize: 10,
    color: 'rgb(255, 255, 255)',
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
    fontSize: 12,
    color: 'rgb(255, 255, 255)',
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
    width:190,
    height:75,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    alignItems:'center',
    flexDirection:'row',
      borderRadius:(3,0)
  },
  vista3:{
    borderWidth: 2,
    backgroundColor: 'rgb(115, 68, 157)',
    borderColor: 'rgb(214, 214, 214)',
    width:70,
    height:76,
    marginLeft:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    borderRadius:(3,0)
  },
  vista4: {
    borderWidth: 2,
    backgroundColor: 'rgb(155, 165, 189)',
    borderColor: 'rgb(214, 214, 214)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    height:35,
   width:190,
     borderRadius:3
  },
  vista5: {
    borderWidth: 1.5,
    backgroundColor: 'rgb(83,224,214)',
    borderRadius:3,
    borderColor: 'rgb(214, 214, 214)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:70,
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
      borderRadius:3
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
    borderRadius: 3,
    borderColor: 'rgb(206, 206, 206)',
    width:264,
    height:115,
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
  color:'#9b12f0',
  textAlign: 'right',
  marginTop:10,
  marginRight:10
  },
  vista10:{
  borderWidth: 2,
  backgroundColor: '#bfbfbf',
  borderColor: 'rgb(214, 214, 214)',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  borderTopWidth:0,
  height:36,
 width:242,
  }
  });

module.exports = busqueda;
