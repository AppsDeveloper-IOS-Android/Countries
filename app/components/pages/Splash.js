/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Splash extends Component {
  render() {
    return (
     
      <LinearGradient
        colors={['white','blue','blue','white']}
        style={{ flex: 1 }}>
           <View style={styles.container}>
        <Text style={styles.welcome}>Countries Detail</Text>
        <Image
          style={{width: "90%", height: 200}}
          source={require('./../Images/World-Map.png')}
        />
        <Text style={styles.instructions}>Developed by me...</Text>
        </View>
        </LinearGradient>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 14,
  },
});

export default Splash