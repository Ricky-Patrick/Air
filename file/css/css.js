import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    background:{
        width:wp('100%'),
        height:hp('100%')
    },
    air:{
        flex:1 ,
        justifyContent: 'center' , 
        alignItems: 'center' , 
        marginBottom: 140
    },
    container:{
        width:wp('50%'),
        height:hp('30%') 
    },
    load:{
        width:wp('10%'),
        height:hp('10%') 
    }
})