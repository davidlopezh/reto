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



class comienza extends Component {
render() {

return (

  //   <ReactNative.NavigatorIOS
  //      barTintColor='rgb(115, 68, 157)'
  //        titleTextColor='#ffffff'
  //    title: 'RESULTADOS DE DESAFIO' />


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
    <View style={styles.vista4}>
    <Icon style={styles.iconS}
     name="clock-o"
     pull="center"

     size={130}
     />
</View>
<Text style={styles.Textcal2}>Tendrás 45 segundos por pregunta para{'\n'}
contestar lo antes posible... </Text>
  </View>
  <TouchableHighlight style={styles.buttonsa}>
  <Text style={styles.Text5}>¡EMPIEZA YA!</Text>
  </TouchableHighlight>
    </View>



    </View>
    );
    }
    }

    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'rgb(78,87,118)',
        position: 'absolute',
        left: 0,
        right: 0,
        top:64,
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

      vista: {
      flexDirection:'row',
      },
      vistagen:{
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'rgb(214, 214, 214)',
        backgroundColor:'#ffffff',
        width:280,
        height:230,
        marginTop:20
      },
      vistagen2:{
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor:'rgb(183,191,202)',
        borderColor: 'rgb(183,191,202)',
        width:280,
        height:170,
        marginTop:20,
        alignItems:'center',
      },
      Text0:{
        color:'rgb(76,209,199)',
        textAlign:'center',
        fontSize: 14,
        fontWeight:'bold',
        marginTop:30
      },
      Textc: {
        padding:0,
        fontSize: 13,
        color: 'rgb(227, 224, 224)',
        textAlign: 'center',
        fontWeight:'bold'
      },
      Text:{
        color:'rgb(78,87,118)',
        textAlign:'center',
        fontSize: 12,
        fontWeight:'bold',
        marginTop:12
      },
      image:{
        width:50,
        height:50,
       borderRadius: 25,
       marginLeft:12,
       marginBottom:17,
       marginTop:19
     },
     Textm: {
       padding:0,
       fontSize: 14,
       color: 'rgb(47, 50, 50)',
       textAlign: 'center',
       fontWeight:'bold'
     },
     vista: {
     flexDirection:'row',
     },
     vista1:{
       borderWidth: 2,
       backgroundColor: 'rgb(115, 68, 157)',
       borderColor: 'rgb(214, 214, 214)',
       width:100,
       height:35,
       marginLeft:0,
       borderRightWidth:0,
       borderLeftWidth:0,
       borderBottomWidth:0,
       borderTopWidth:0,
       marginTop:80,
     },
     Text1:{
       color:'#ffffff',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:9
     },
     vista2:{
       borderWidth: 2,
       backgroundColor: '#ffffff',
       borderColor: 'rgb(214, 214, 214)',
       width:207,
       height:60,
       borderRightWidth:0,
       borderLeftWidth:0,
       borderBottomWidth:0,
       borderTopWidth:0,
       alignItems:'center',
       flexDirection:'row',
     },
     Text2:{
       color:'#fa0000',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:9
     },
     Text3:{
       color:'#05c3a7',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:9
     },
     vistagen3:{
       borderWidth: 2,
       borderRadius: 5,
       borderColor: '#ffffff',
       width:280,
       height:40,
       marginTop:20,
       backgroundColor:'#ffffff'
     },
     Text4: {
       padding:0,
       fontSize: 12,
       color: 'rgb(115, 68, 157)',
       textAlign: 'left',
       marginTop:11,
       fontWeight:'bold',
       marginLeft:14,
       width:200
     },
     vista9:{
       width:30,
     },
     vista3:{
       borderWidth: 2,
       backgroundColor: '#67e0d5',
       borderColor: 'rgb(214, 214, 214)',
       width:70,
       height:60,
       marginLeft:0,
       borderRightWidth:0,
       borderLeftWidth:0,
       borderBottomWidth:0,
       borderTopWidth:0,
     },
     buttonsa: {
       borderWidth: 2,
       borderRadius: 5,
       borderColor: 'rgb(76,209,199)',
       width:280,
       height:42,
      marginTop:18,
       backgroundColor:'rgb(76,209,199)'
     },
     Text5:{
       color:'#ffffff',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:9,
       fontSize: 14,
     },

     Text7:{
       color:'#ffffff',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:60,
       fontSize: 14,
     },
     Textcal: {
       padding:0,
       fontSize: 13,
       color: '#9b12f0',
       textAlign: 'center',
       fontWeight:'bold',
       marginTop:19
     },
     vista4:{
       borderColor: 'rgb(214, 214, 214)',
       width:277,
       height:50,
       marginLeft:0,
       borderRightWidth:0,
       borderLeftWidth:0,
       borderBottomWidth:0,
       borderTopWidth:1.5,

     },
     iconS: {
     color:'rgb(115, 68, 157)',
     textAlign: 'center',
     marginTop:2,
     },
     Textcal2: {
       padding:0,
       fontSize: 11,
       color: 'rgb(115, 68, 157)',
       textAlign: 'center',
       fontWeight:'bold',
       marginTop:80
     },
     buttonsa: {
       borderWidth: 2,
       borderRadius: 5,
       borderColor: 'rgb(76,209,199)',
       width:280,
       height:42,
      marginTop:9,
       backgroundColor:'rgb(76,209,199)'
     },
     Text5:{
       color:'#ffffff',
       textAlign:'center',
       fontWeight:'bold',
       marginTop:9,
       fontSize: 14,
     },
     });

module.exports = comienza;
