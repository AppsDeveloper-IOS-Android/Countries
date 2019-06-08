/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Detail from './Detail';



export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  static navigationOptions = {
    title: 'Countries List',
  };

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation
    var lang = item.languages.map(function(item) {
      return {
        key: item[0] + item[1],
        label: item[0] + item[1],
      };
    });

    //console.log (call)
    return (
      <TouchableOpacity onPress={() => navigate('detail', {
        country_Name: item['name'],
        Top_Level_Domain: item['topLevelDomain'],
        Capital: item['capital'],
        Region: item['region'],
        Sub_Region: item['subregion'],
        Population: item['population'],
        Demonym: item['demonym'],
        Area: item['area'],
        Native_Name: item['nativeName'],
        Numeric_Code: item['numericCode'],
        Alfa2Code: item['alpha2Code'],
        Languages: lang

      })}>
        <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row' }}>

          <View>

            <Image style={{ height: 50, width: 50 }}
              source={{ uri: "https://www.countryflags.io/" + item['alpha2Code'] + "/shiny/64.png" }}
            />
          </View>
          <View>

            <Text style={{ paddingTop: 5, paddingLeft: 10 }}>Country: {item['name']}</Text>
            <Text style={{ paddingLeft: 10 }}>Capital: {item['capital']}</Text>
          </View>

        </View>
      </TouchableOpacity>
    )
  }

  componentDidMount() {

    return fetch('https://restcountries-v1.p.rapidapi.com/all', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'restcountries-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'a787686b2fmshd1449439b32a681p1bb8fejsnf95269cac16d',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson

        })
      })

      .catch((error) => {
        console.log(error)
      });
    console.log(responseJson)
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    return (

      <LinearGradient
        colors={['white', 'blue', 'blue', 'white']}
        style={{ flex: 1 }}>
        <SafeAreaView>

          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => item.name}
          />



        </SafeAreaView>

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



const AppStackNavigator = createStackNavigator({
  home: HomePage,
  detail: Detail,
})

export default createAppContainer(AppStackNavigator);