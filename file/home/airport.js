import React from 'react';
import { Text, View, Image, ImageBackground , ActivityIndicator} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Icon from"react-native-vector-icons/Ionicons";
import {assets,font} from 'expo';

import styles from '../css/airport';
import bandara from '../../img/asset/michal-parzuchowski-xFItahF-1.png';



class airport extends React.Component {
    static navigationOptions={
        header: null
    }
    
    render (){
        return (
            
            <View>
                
                    <Icon name="ios-close" color="black" size={50} style={styles.ex}/>
                <Text style={styles.ats}>Airport</Text>
                    <View style={styles.bndr1}>
                    <Image source={bandara} style={styles.bndr} />
                </View>
                    
            </View>  
        );
    }
}
export default airport; 