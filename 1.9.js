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
  ListView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



exports.displayName = (undefined: ?string);
exports.title = '<ScrollView>';
exports.description = 'Component that enables scrolling through child components';


class store extends Component {

  render() {
    var _scrollView: ScrollView;
    return (

    //  <ReactNative.NavigatorIOS
    //    title: 'Tienda' />
<View style={styles.container}>
<Text style={styles.Text1}>Selecciona el examen{'\n'} para el que te gustaría estudiar </Text>
<Text style={styles.Text2}>FÍSICO MATEMATICAS E INGENIERÍA </Text>

         <ScrollView horizontal={true} automaticallyAdjustContentInsets={false} pagingEnabled={true}>

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

                <TouchableHighlight style={styles.buttonG}>
                <View>
                <Icon style={styles.iconS}
                 name="plus-circle"
                 pull="center"
                 size={20}
                 margin-Left={170}
                 width={7}
                 />
                <Text style={styles.GText}>Guía{'\n'}Demo
                 </Text>
                 </View>
                </TouchableHighlight>
         </ScrollView>
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
    marginTop:13,
    fontSize: 14,
    color: 'rgb(134, 129, 129)',
    textAlign: 'center',

    },
    Text2: {
      marginTop:25,
      fontSize: 13,
      color: 'rgb(99, 96, 96)',
      textAlign: 'left',
      marginLeft:10
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
  marginLeft:9,
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
textAlign: 'right',
borderColor:"white",
color:"white",
},
vista: {
marginLeft:5
},
  });

  module.exports = store;
