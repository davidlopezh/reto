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
  ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




class profile extends Component {
constructor(){
super();
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
this.state = {
  dataSource: ds.cloneWithRows(['Perfil', 'Estadísticas', 'FAQs', 'Tienda'])
  };
}
  render() {
    //console.log('registry.render');
    return (
      <View style={styles.container}>
            <Text style={styles.Text1}>Bienvenido usuario</Text>

      <ListView  scrollEnabled={true} style={styles.Items}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={styles.TextI}>{rowData}   <Icon
          name="chevron-right"
          borderColor='rgb(20, 116, 235)'
          size={15}
          /></Text>}/>
          <Text style={styles.Text2}>Selecciona tu guía</Text>

          <TouchableHighlight style={styles.buttonG}>
          <View>
          <Icon style={styles.iconS}
           name="plus-circle"
           pull="center"
           size={20}
           />
          <Text style={styles.GText}>Guía{'\n'}Demo
           </Text>
           </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonC}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableHighlight>

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
        top: 60,
        bottom: 0,

      },
      Items: {
      flex: 1,
      marginLeft:0,
      position: 'relative',
      flexGrow:30,
      maxHeight:150,
      maxWidth:371,

    },
    Text1: {
    marginTop:10,
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontWeight:'bold',
    },
    Text2: {
    marginTop:17,
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontWeight:'bold',
    },

    TextI: {
      lineHeight:40,
    fontSize: 18,
    color: 'rgb(203, 203, 203)ck',
    fontWeight:'bold',
},
buttonG: {
  borderColor: '#95989a',
  borderRadius: 5,
  backgroundColor: 'rgba(223, 54, 1, 0.83)',
  borderColor: 'rgba(223, 54, 1, 0.83)',
  marginTop:30,
  width:120,
  height:150,
  alignItems: 'center',
},
buttonC: {
  borderRadius: 5,
  backgroundColor: 'rgb(20, 116, 235)',
  borderColor: 'rgb(20, 116, 235)',
  padding: 9,
  marginTop:150,
  width:250,
  alignSelf:'center',
  justifyContent:'flex-end'
},
buttonText: {
fontSize: 14,
color: 'white',
textAlign: 'center'
},
GText: {
  fontSize: 14,
  color: 'white',
  textAlign: 'center',
  marginTop:28,
  borderWidth: .5,
  borderRadius: 5,
  borderColor:'white',
  width:80
},
iconS: {
color: 'white',
textAlign: 'right'
},
  });

  module.exports = profile;
