/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './app/components/pages/Splash'
import HomePage from './app/components/pages/HomePage'
 


class Main extends Component {
    constructor (props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(()=>{
            this.setState({ currentScreen: 'HomePage' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <HomePage/>
        return mainScreen
    }
    
}

AppRegistry.registerComponent(appName, () => Main);

