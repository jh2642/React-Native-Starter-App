/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  MapView,
  WebView,
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text style={styles.intro}>
        Image Component
      </Text>
        <Image style={styles.images}
          source={require('./willie.jpg')}
        />
        <Text style={styles.intro}>
          MapView Component
        </Text>
        <MapView
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
        />
        <Text style={styles.intro}>
          WebView Component
        </Text>
        <WebView
          style={styles.webStyle}
          source={{uri: 'https:yahoo.com'}}
        />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  intro: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 40,
    marginTop: 20,
  },
  images: {
    marginTop: 20,
    
  },
  webStyle: {
    backgroundColor: 'white',
    height: 800,
  },
});

AppRegistry.registerComponent(
  'AwesomeProject',
  () => AwesomeProject);
