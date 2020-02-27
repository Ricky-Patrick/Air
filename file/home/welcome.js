import React, {Component} from 'react';
import { Text, View, Image, ImageBackground , ActivityIndicator} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import back from '../../img/asset/bg-2.png';
import air from '../../img/asset/logo-1.png';
import styles from '../css/css';


class welcome extends React.Component {
    static navigationOptions={
        header: null}

        componentDidMount(){
            setTimeout(() => {
                        this.props.navigation.navigate('home')
            }, 3000);
        }

    render (){
        return (
            <View>
                <ImageBackground source={back} style={styles.background}>
                    <View style={styles.air}>
                    <Image source={air} style={styles.container}/>
                    
                    <ActivityIndicator size="large" color="black" />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default welcome;