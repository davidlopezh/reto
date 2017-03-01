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



class desafio extends Component {
render() {

return (

  //   <ReactNative.NavigatorIOS
  //    barTintColor='#283b58'
  //      titleTextColor='#05c3a7'
  //    title: 'RESULTADOS DE DESAFIO' />

  <View style={styles.container}>

  <View style={styles.buttons}>
  <View style={styles.btnWrapper}>
  </View>
  <Text style={styles.Text0}> EN ESPERA DE RESULTADOS:</Text>

  <View style={styles.vistagen2}>
  <Text style={styles.Text}> LO SENTIMOS NOMBRE,{'\n'} SIGUE JUGANDO ...</Text>
  <Image source={require('./Resources/mujer1.png')} style={styles.image}/>

  <View style={styles.vista}>
  <View style={styles.vista1}>
  <Text style={styles.Text1}>Cancelar:</Text>
  </View>
  <View style={styles.vista2}>
  <Text style={styles.Text3}>9/10</Text>
  </View>
  </View>
  </View>




<View style={styles.vistagen}>
<Text style={styles.Text}> LO SENTIMOS NOMBRE,{'\n'} SIGUE JUGANDO ...</Text>
<Image source={require('./Resources/mujer1.png')} style={styles.image}/>

<View style={styles.vista}>
<View style={styles.vista1}>
<Text style={styles.Text1}>Cancelar:</Text>
</View>
<View style={styles.vista2}>
<Text style={styles.Text2}>9/10</Text>
</View>
</View>
</View>


<View style={styles.vistagen3}>
<View style={styles.vista}>

<TouchableHighlight style={styles.vista3}>
<Text style={styles.Text4}>Comparte tus resultados:</Text>
</TouchableHighlight>

<View style={styles.vista9}>
  <Icon style={styles.iconS}
   name="share-alt"
   pull="center"
   size={20}
   />
</View>
  </View>
  </View>

  <TouchableHighlight style={styles.buttonsa}>
  <Text style={styles.Text5}>SALIR</Text>
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
      top:0,
      bottom: 0,
      alignItems: 'center',
      justifyContent:'space-between'
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

    vista: {
    flexDirection:'row',
    },

    vistagen:{
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor:'rgb(76,209,199)',
      borderColor: 'rgb(76,209,199)',
      width:280,
      height:170,
      marginTop:25,
      alignItems:'center',
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
    Text:{
      color:'rgb(78,87,118)',
      textAlign:'center',
      fontSize: 12,
      fontWeight:'bold',
      marginTop:12
    },
    image:{
      width:80,
      height:80,
     borderRadius:35,
     marginLeft:100,
     marginBottom:17,
     marginTop:55,
     position:'absolute',
     zIndex:5
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
     width:100,
     height:35,
     marginLeft:0,
     borderRightWidth:0,
     borderLeftWidth:0,
     borderBottomWidth:0,
     borderTopWidth:0,
      marginTop:80,
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
   iconS: {
   color:'rgb(115, 68, 157)',
   textAlign: 'right',
   marginTop:9,
   marginRight:10
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
   });

module.exports = desafio;
