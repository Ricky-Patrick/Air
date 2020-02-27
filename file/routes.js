import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import home from './home/homescreen';
import welcome from './home/welcome';
import loading from './home/loading';
import airport from './home/airport';
import fitness from './home/fitness';
import culinary from './home/culinary';
import atm from './home/atm';
import gas from './home/gas';
import park from './home/park';
import sites from './home/sites';
import story from './home/story';

const AppNavigator = createStackNavigator({

    welcome : {screen : welcome},
    home : {screen: home},
    loading : {screen: loading},
    airport: {screen: airport},
    fitness: {screen: fitness},
    culinary: {screen: culinary},
    atm : {screen: atm},
    gas : {screen: gas},
    park : {screen: park},
    sites : {screen: sites},
    story : {screen: story },

},
    {
        initialRouteName: 'welcome',
    }
);

export default createAppContainer(AppNavigator);