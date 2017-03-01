'use strict';

var React = require('react', 'PropTypes');
var ReactNative = require('react-native');
var login = require('./1.3');
var Text = require('react-native');
var styles = ReactNative.StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 0
  },
  container: {
    flex: 1
  }
});

class reto_universidad extends React.Component {
render() {
  return (
    <ReactNative.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Login',
        component: login,
      }}/>
  );
}
}
ReactNative.AppRegistry.registerComponent('reto_universidad', function() { return reto_universidad });
