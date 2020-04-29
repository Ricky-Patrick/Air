
import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    bndr:{
        width:wp('40%'),
        height:hp('20%'),
        resizeMode:'cover',
        backgroundColor:'blue',
        borderRadius:20
    },
    bndr1:{
        width:wp('40%'),
        height:hp('20%'),
        paddingLeft:10,
        paddingTop:30
    },
    ex:{
        marginTop:hp('4%'),
        paddingLeft:20
    },
    ats:{
        textAlign:'center',
        fontSize:hp('3%'),
        fontWeight:'bold',
        marginTop:hp('-6%')
    }
})