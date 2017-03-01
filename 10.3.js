'use strict';


var ReactNative = require('react-native');


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


class comienza extends Component {
  constructor(props) {
         super(props);
         this.state = {
             pressed: false
         }
     }



render() {

return (

  //<ReactNative.NavigatorIOS
    //  title: 'Aleatorio' />

<View style={styles.container}>
<View style={styles.vista0}>

<Image source={require('./Resources/mujer1.png')} style={styles.image}/>

<View style={styles.vista13}>
<Text style={styles.Text9}> 00:01</Text>
<View style={styles.vista14}>
<Text style={styles.Text12}>VS.</Text>
</View>
</View>
<Image source={require('./Resources/mujer1.png')} style={styles.image2}/>
<View style={styles.vistag4}>
<View style={styles.vistag5}>
<Text style={styles.Text}>andresmellow</Text>
</View>
<View style={styles.vistag6}>
<Text style={styles.Text}>Alberto D. Sustiel</Text>
</View>
</View>
<View style={styles.vistag}>
<View style={styles.vistag2}>
<Text style={styles.Text}>Compitiendo</Text>
</View>
<View style={styles.vistag3}>
<Text style={styles.Text}>0/0</Text>
</View>
</View>
</View>

<View style={styles.vista1}>
<Text style={styles.Text1}>Pregunta 1 de 10</Text>
</View>
<View style={styles.vista2}>
<Text style={styles.Text2}>Paciente sometido a colecistectomía programada que transcurre
sin complicaciones transoperstorias o postoperatorias, se cerraron la piel y tejidos
adyacentes con grapas. Acude a revisión 3 semanas después del evento quirúrgico.</Text>
</View>
<View style={styles.vista3}>
<Text style={styles.Text3}>¿Qué tipo de herida quirúrgics se realizó?</Text>
</View>

<View style={styles.buttons}>
<View style={styles.btnWrapper}>
</View>

<TouchableHighlight onPress={
        ()=> {
        }
    } style={[styles.buttonc, this.state.pressed ? {borderColor: 'rgb(20, 116, 235)', backgroundColor:'white'} : {}]}
    onHideUnderlay={()=>{this.setState({pressed: false})}}
    onShowUnderlay={()=>{this.setState({pressed: true})}}>
    <Text style={styles.TextB}>Osteoartritis</Text>
    </TouchableHighlight>

<TouchableHighlight style={styles.buttonc} >
<Text style={styles.TextB}>Artritis séptica</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc}>
<Text style={styles.TextB}>Pseudogota</Text>
</TouchableHighlight>

<TouchableHighlight style={styles.buttonc}>
<Text style={styles.TextB}>Gota</Text>
</TouchableHighlight>


</View>
</View>
);
}

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },

  Text1:{
    textAlign: 'center',
    color: 'rgb(78,87,118)',
    fontWeight: 'bold',
    alignSelf:'stretch',
    flexWrap:'wrap',
    marginTop:12
  },
  Text:{
    textAlign: 'center',
    color: 'rgb(255, 255, 255)',
    fontSize:10,
    marginTop:3,
    fontWeight:'bold'

  },
  vista1: {
    backgroundColor:'rgb(208,248,243)',
    borderColor: 'rgb(148,224,209)',
    borderWidth: 1,
    alignSelf:'stretch',
    flexWrap:'wrap',
    height:40
  },
  Text2:{
    textAlign: 'center',
    color: 'rgb(78,87,118)',
    alignSelf:'stretch',
    fontSize:11,
    fontWeight: 'bold',
    marginTop:7
  },
  vista2: {
    backgroundColor:'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    alignSelf:'stretch',
  },
  Text3:{
    textAlign: 'center',
    color: 'rgb(78,87,118)',
    fontWeight: 'bold',
    alignSelf:'stretch',
    flexWrap:'wrap',
    marginTop:5,
    fontSize:11,
    fontWeight: 'bold',
  },
  vista3: {
    backgroundColor:'rgb(208,248,243)',
    borderColor: 'rgb(148,224,209)',
    borderWidth: 1,
    alignSelf:'stretch',
    flexWrap:'wrap',
    height:30,
    marginTop:8
  },
  vista0: {
    backgroundColor:'rgb(78,87,118)',
    borderColor: 'rgb(78,87,118)',
    borderWidth: 1,
    alignSelf:'stretch',
    height:175,
    flexDirection:'row',

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

  buttonc: {
    borderColor: 'rgb(179,217,207)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 9,
    marginTop:7
  },

  TextB: {
    textAlign: 'left',
    color: '#4d4f50',
    fontWeight: 'bold',
  },
vistagen:{
  backgroundColor:'rgb(78,87,118)',
  borderColor: 'rgb(78,87,118)',
  borderWidth: 1,
  alignSelf:'stretch',
   width:280,
   height:170,
   alignItems:'center',
 },
 Text10:{
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
  marginTop:30,
  marginLeft:70

},
image2:{
  width:80,
  height:80,
 borderRadius:35,
marginLeft:13,
 marginTop:29,

},
vista9:{
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
Text11:{
  color:'#ffffff',
  textAlign:'center',
  fontWeight:'bold',
  marginTop:9
},
vista10:{
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
Text9:{
  color:'#fffbfb',
  textAlign:'center',
  fontWeight:'bold',
  marginTop:22,
},
Text12:{
  color:'rgb(115,124,154)',
  textAlign:'center',
  fontWeight:'bold',
  marginTop:2,
  marginBottom:2

},
vista14:{
  width:45,
  borderTopWidth:2,
  borderBottomWidth:2,
  borderColor:'rgb(115,124,154)',
  marginTop:20,
  marginLeft:3

},
vista12:{
  width:70,
  borderColor:'white',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:1,
  borderTopWidth:1,
  marginLeft:0,
  marginTop:0,


},
vista13: {
width:50,
height:90,
marginLeft:13,
alignItems:'center',
},



vistag: {
flexDirection:'row',
marginTop:100,
position:'absolute',
zIndex:5,
marginLeft:110
},
vistag2: {
  borderWidth: 2,
  backgroundColor: 'rgb(115, 68, 157)',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  borderTopWidth:0,
  height:20,
 width:80,
},
vistag3: {
  borderWidth: 1.5,
  backgroundColor: 'rgb(76, 209, 199)',
  borderColor: 'rgb(214, 214, 214)',
  borderRightWidth:0,
  borderLeftWidth:0,
  borderBottomWidth:0,
  borderTopWidth:0,
  width:80,
  height:20,
},
vistag4: {
flexDirection:'row',
marginTop:145,
position:'absolute',
zIndex:5,
marginLeft:30
},
vistag5: {
marginRight:10,
width:150
},
vistag6: {
width:150
},
  });
module.exports = comienza;
