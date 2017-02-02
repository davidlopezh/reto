'use strict';

var React = require('react', 'PropTypes');
var ReactNative = require('react-native');
var login = require('./login');


var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
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
