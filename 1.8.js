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
  NavigatorIOS
} from 'react-native';


class random extends Component {

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

<Text style={styles.Text}>PREGUNTA 1/10</Text>
<Text style={styles.Text}>¿CUÁL ES EL TRATAMIENTO ANTIMICROBIANO MÁS ADECUADO PARA EL PACIENTE?</Text>

<View style={styles.btnWrapper}>
</View>

<Text style={styles.TextR}>¿Las respuestas coinciden? <Text style={styles.TextR2}>NO</Text></Text>

<TouchableHighlight onPress={
        ()=> {
        }
    } style={[styles.buttonc, this.state.pressed ? {borderColor: 'red', backgroundColor:'white'} : {}]}
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

<Text style={styles.TextJ}>JUSTIFICACIÓN</Text>

<Text style={styles.Text3}>Reto Universidad es una app que se enfoca en preparar estudiantes a nivel república paraingresar a la
Univeridad de su selección. Ya que existen varios exámenes de ingreso y materias específicas para las diferentes áreas
de conocimiento, se recomienda comprar una guía.</Text>

<Text style={styles.Text3}>Preparar estudiantes a nivel república para ingresar a la Universidad de su elección. Ya que existen varios exámenes de ingreso y materias específicas para las diferentes áreas de conocimiento, se recomienda comprar una guía.</Text>
</View>

);
}

};


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

  Text3: {
    padding: 10,
    textAlign: 'center',
    color: '#000000',
    flexWrap:'wrap',
    marginTop:3
  },
  TextR: {
    padding: 15,
    textAlign: 'center',
    color: '#090909',
    flexWrap:'wrap'
  },
  TextR2: {
    padding: 15,
    textAlign: 'center',
    color: '#f20606',
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
    marginTop:7,
    width: 300
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
    borderColor: 'blue',
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
  TextJ: {
    borderWidth: .5,
    padding: 10,
    textAlign: 'center',
    color: '#4d4f50',
    fontWeight: 'bold',
    alignSelf:'stretch',
    flexWrap:'wrap',
    marginTop:13
  },

  });
module.exports = random;
