/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var sa = require("superagent");
var Button = require('react-native-button');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var FirstOne = React.createClass({
  getInitialState: function() {
    return {text: "Hello first pingwinek"};
  },
  showTime: function() {
    this.setState({text: new Date().toString()});
  },
  componentDidMount: function() {
    setInterval(this.showTime, 1000);
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
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
