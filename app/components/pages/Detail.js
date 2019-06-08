import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Detail extends React.Component {



    static navigationOptions = {
        title: 'Detail',
    };

    constructor(props) {
        super(props)
        this.state = {
            country_Name: this.props.navigation.state.params.country_Name,
            Top_Level_Domain: this.props.navigation.state.params.Top_Level_Domain,
            Capital: this.props.navigation.state.params.Capital,
            Region: this.props.navigation.state.params.Region,
            Sub_Region: this.props.navigation.state.params.Sub_Region,
            Population: this.props.navigation.state.params.Population,
            Demonym: this.props.navigation.state.params.Demonym,
            Area: this.props.navigation.state.params.Area,
            Native_Name: this.props.navigation.state.params.Native_Name,
            Numeric_Code: this.props.navigation.state.params.Numeric_Code,
            Alfa2Code: this.props.navigation.state.params.Alfa2Code,
            Languages: this.props.navigation.state.params.Languages
          
        };

    }

    render() {
        return (

            <LinearGradient
                colors={['white', 'blue', 'blue', 'white']}
                style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Image style={{ height: 150, width: 150 }}
                        source={{ uri: "https://www.countryflags.io/" + this.state.Alfa2Code + "/shiny/64.png" }}
                    />

                    <Text style={styles.welcome}>Country Name    : {this.state.country_Name} </Text>
                    <Text style={styles.instructions}>Top Level Domain: {this.state.Top_Level_Domain}</Text>
                    <Text style={styles.instructions}>Capital         : {this.state.Capital} </Text>
                    <Text style={styles.instructions}>Region          : {this.state.Region}</Text>
                    <Text style={styles.instructions}>Sub Region      : {this.state.Sub_Region}</Text>
                    <Text style={styles.instructions}>Population      : {this.state.Population}</Text>
                    <Text style={styles.instructions}>Demonym         : {this.state.Demonym}</Text>
                    <Text style={styles.instructions}>Area            : {this.state.Area}</Text>
                    <Text style={styles.instructions}>Native Name     : {this.state.Native_Name}</Text>
                    <Text style={styles.instructions}>Numeric Code    : {this.state.Numeric_Code}</Text>

                    {this.state.Languages.map((props, key) => {
                        return (
                            <Text style={styles.instructions}>Languages Codes{key + 1}       : {props[0] + props[1]}</Text>
                        );
                    })}






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
        color: 'yellow',
        marginBottom: 5,
        fontSize: 16,
    },
});


export default Detail