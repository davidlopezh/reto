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
  NavigatorIOS,
} from 'react-native';

var random2 = require('./random2');


class random extends Component {
  constructor(props) {
         super(props);
         this.state = {
             pressed: false
         }
     }
     navSecond(){
        this.props.navigator.push({
            title: 'Aleatorio',
            component: random2
        })
      }

render() {

return (

  //<ReactNative.NavigatorIOS
    //  title: 'Aleatorio' />

<View style={styles.container}>

<Text onPress={this.navSecond.bind(this)} style={styles.Texn}>Siguiente</Text>

<Text style={styles.Text}>PREGUNTA 1/10</Text>
<Text style={styles.Text}>¿CUÁL ES EL TRATAMIENTO ANTIMICROBIANO MÁS ADECUADO PARA EL PACIENTE?</Text>

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

<TouchableHighlight style={styles.buttona}>
<Text style={styles.TextA}>Aceptar</Text>
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
    top: 65,
    bottom: 0,
    alignItems: 'center',
  },
  Text: {
    borderColor: '#95989a',
    borderWidth: .5,
    padding: 10,
    textAlign: 'center',
    color: '#4d4f50',
    fontWeight: 'bold',
    alignSelf:'stretch',
    flexWrap:'wrap'
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
  buttonc: {
    borderColor: '#95989a',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 9,
    marginTop:7
  },

  buttonc2: {
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 9,
    marginTop:7
  },

  buttonClick: {
    borderColor: 'blue',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 9,
    marginTop:7
  },
  buttona: {
    borderColor: 'rgb(20, 116, 235)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    backgroundColor: 'rgb(20, 116, 235)',
    padding: 9,
    marginTop:19
  },
  TextB: {
    textAlign: 'center',
    color: '#4d4f50',
    fontWeight: 'bold',
  },
  TextA: {
    textAlign: 'center',
    color: 'white',
  },
  content: {

    borderWidth: 0,
  },
  Texn: {
    padding: 10,
    textAlign: 'right',
    color: 'rgb(20, 116, 235)',
    alignSelf:'stretch',
    flexWrap:'wrap'
  },

  });
module.exports = random;
