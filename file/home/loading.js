
import React, {Component} from 'react';
import { Text, View, Image, ImageBackground  } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

import bg from '../../img/asset/bg.png';


class loading extends React.Component {
    render (){
        return (
            <View>
                <Text>hallo</Text>
                
            </View>  
        );
    }
}

export default loading;