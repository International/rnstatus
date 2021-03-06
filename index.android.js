/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Button = require('react-native-button');

var ExampleComponent = React.createClass({
  render() {
    return (
      <Button
        style={styles.button}
        styleDisabled={{color: 'red'}}
        onPress={this._handlePress}
      >
        <Text>
          Pressuj Me!
        </Text>
      </Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
});

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var FirstOne = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Hello Pingwinek
        </Text>
        <ExampleComponent></ExampleComponent>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 100,
    height: 60,
    color: '#fff',
    lineHeight: 20,
    textAlign: 'center',
    backgroundColor: '#49A8A2',
    borderRadius: 20
  }
});

AppRegistry.registerComponent('FirstOne', () => FirstOne);
