import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Navigator
} from 'react-native';



class splash extends Component {
  render() {
    console.log('splash.render');
    return (
      <View style={styles.container}>
<Image source={require('./Resources/casa.png')} style={styles.image}/>
</View>
);
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(25, 71, 236)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 65,
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    width: 217,
    height: 138,
marginTop: 200
  }
});



    module.exports = splash;
