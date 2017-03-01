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





class notifications extends Component {
render() {

return (

  //   <ReactNative.NavigatorIOS
  //    barTintColor='#9b12f0'
//      titleTextColor='#ffffff'
  //    title: 'NOTIFICACIONES' />


<View style={styles.container}>
<Text style={styles.Text}>No tienes notificaciones que mostrar </Text>
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
Text: {
fontSize: 14,
color: 'black',
alignSelf: 'stretch',
textAlign: 'left',
marginTop:8,
marginLeft:4,
fontWeight:'bold'
}

});

module.exports = notifications;
