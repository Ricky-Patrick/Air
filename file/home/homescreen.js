import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView ,TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';

{/*diskover*/}
import bg from '../img/asset/jezael-melgoza-KNijwi0CU5U-unsplash.png';
import lokasi from '../img/asset/Icon-material-location-on.png';
import kepala from '../img/asset/maskgrup.png';
import search from '../img/asset/search.png';

{/*nearby*/}
import plane from '../img/asset/plane.png';
import fitness from '../img/asset/dumbbell.png';
import culinary from  '../img/asset/rice.png';
import atm from '../img/asset/business-and-finance.png';

import gas from '../img/asset/gas-station.png';
import park from '../img/asset/ferris.png';
import historic from '../img/asset/oscar-academy-award.png';
import  local from '../img/asset/script.png';

{/*destinasi*/}
import kuta from '../img/asset/kuta.png';
import lokasi1 from '../img/asset/pin.png';
import raja from '../img/asset/papua.png';
import turtle from '../img/asset/samule-sun-Mwg_MdX-Jx-1.png';
import nusa from '../img/asset/nasa-kDsNr-vu-1.png';
import sleman from '../img/asset/mandalika-ntb.png';



{/*tab bar*/}
import iconhome from '../img/asset/home-icon-silhouette.png';
import iconar from '../img/asset/icon-1.png';
import iconitinerary from '../img/asset/map.png';
import iconprofile from '../img/asset/user.png';

class home extends React.Component {
    static navigationOptions={
        header: null
    }
    render(){
    return (
    <View style={{flex : 1}}>

    <View style={{flex: 1 , backgroundColor: '#EEEEEE' }}>
{/*diskovery*/}
        <ImageBackground source={bg} style={{ flex:0.5}}>

        <View style={{flexDirection:"row", flex:1, marginTop:50, paddingHorizontal:30}}>

        <View style={{flexDirection:'column' , flex:4 , marginTop: 60}}>
        <View style={{flexDirection:'row'}}>
                <Image source={lokasi} style={{  width:25 ,  height:25,resizeMode:'contain'}}/>

                <Text style={{fontSize: 16 , fontWeight: "bold" , color : 'white'}}>You're in Japan</Text>
        </View>
                <Text style={{ fontSize: 35 , fontWeight: "bold" , color : 'white'}}>Discovery</Text>
        </View>

            <Image source={kepala} style={{resizeMode:"contain",flex:1, marginTop: 60}} />
        </View>

        </ImageBackground>

{/*search bar*/}
        <View style={{marginHorizontal :27, zIndex:10}}> 

        <View style={{marginTop:-30, zIndex:10}}>
            <TextInput placeholder= "Hi Lerry, What do you want to go ?" style={{borderwidth: 1 ,borderColor: 'black' , 
            width: 300 , height: 55 , fontSize: 13 , paddingRight: 20 , paddingLeft: 45 ,backgroundColor: 'white' ,
            borderRadius: 10 }}/>
        
            <Image source={search} style={{width: 20  , height: 20, marginTop:-38 , marginLeft: 10 }}/>

        </View>
    
        </View>            

{/*nearby position*/}        
        
        <ScrollView style={{flex:2, backgroundColor:"EEEEEE"}}>

        <View style={{paddingBottom: 40}}>
            
            <Text style={{fontSize: 20 , paddingLeft: 15 ,marginTop: 60}}>Nearby Your Position</Text>

        </View>

        <View style={{flexDirection: 'row' , flexWrap: 'wrap' , marginHorizontal :16 , margintop: '18'}}>

            <View style={{justifyContent: 'space-between' , flexDirection: 'row' , width: '100%' , marginBottom: 28}}>

                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={plane}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Aiport</Text>
                </View>
                
                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={fitness}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Fitness</Text>
                </View>
                
                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={culinary}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Culinary</Text>
                </View>
                
                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={atm}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Atm</Text>
                </View>

                
            </View>

            <View style={{justifyContent: 'space-between' , flexDirection: 'row' , width: '100%'}}>

                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={gas}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Gas-Station</Text>
                </View>
                
                <View >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={park}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Amusement{"\n"} Park</Text>
                </View>
                
                <View > 
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={historic}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Historic</Text>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: -4}}>Sites</Text>
                </View>
                
                <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                <View style={{width: 58 , height:58 , borderWith: 1 , borderColor: 'white' , borderRadius: 18 , backgroundColor:'white' , justifyContent: 'center' , alignItems: 'center'}}>
                    <Image source={local}/>
                </View>
                </TouchableOpacity>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: 6}}>Local</Text>
                    <Text style={{fontSize: 13 , fontWeight: 'bold' , textAlign : 'center' , marginTop: -4}}>Story</Text>
                </View>

            </View>



            </View>

{/*scroll samping*/}

            <View style={{marginTop: 80}}>
                    <View style={{paddingLeft: 27}}>
                        <Text style={{fontSize: 20}}>Famous Place at Indonesia</Text>
                    </View>

            <ScrollView horizontal={true} style={{flexDirection: 'row' ,paddingTop:30}}>

            

                <View style={{marginRight: 16}}>

                    <View style={{width: 190 ,height: 250}}> 
                        <Image source={kuta} style={{ width:undefined , height:undefined , resizeMode: 'cover' , flex:1 , borderRadius: 22}}/>
                        <Text style={{fontSize: 19 ,fontWeight:"bold" , marginLeft:20 , marginTop:-10 , marginTop:5}}>Kuta</Text>
                    </View>
                    <View style={{flexDirection: 'row'  , marginLeft:20}}>
                        <Image source={lokasi1} style={{width:20 , height:20}}/>
                        <Text style={{fontSize: 14  }}>Bali</Text>
                    </View>
                    
                </View>
                <View style={{marginRight: 16}}>

                    <View style={{width: 150 ,height: 250}}> 
                        <Image source={raja} style={{width:undefined , height:undefined , resizeMode: 'cover' , flex:1 , borderRadius: 12}}/>
                        <Text style={{fontSize: 19 ,fontWeight:"bold" , marginLeft:20 , marginTop:-10 , marginTop:5}}>Raja Ampat</Text>
                    </View>
                    <View style={{flexDirection: 'row'  , marginLeft:20}}>
                        <Image source={lokasi1} style={{width:20 , height:20}}/>
                        <Text style={{fontSize: 14  }}>papua</Text>
                    </View>

                </View>

                <View style={{marginRight: 16}}>

                        <View style={{width: 150 ,height: 250}}> 
                            <Image source={turtle} style={{width:undefined , height:undefined , resizeMode: 'cover' , flex:1 , borderRadius: 12}}/>
                            <Text style={{fontSize: 19 ,fontWeight:"bold" , marginLeft:20 , marginTop:-10 , marginTop:5}}>Turtle beach</Text>
                        </View>
                        <View style={{flexDirection: 'row'  , marginLeft:20}}>
                            <Image source={lokasi1} style={{width:20 , height:20}}/>
                            <Text style={{fontSize: 14  }}>west{"\n"}kalimantan</Text>
                        </View>

                </View>

                <View style={{marginRight: 16}}>

                        <View style={{width: 150 ,height: 250}}> 
                            <Image source={nusa} style={{width:undefined , height:undefined , resizeMode: 'cover' , flex:1 , borderRadius: 12}}/>
                            <Text style={{fontSize: 19 ,fontWeight:"bold" , marginLeft:20 , marginTop:-10 , marginTop:5}}>Riverna</Text>
                        </View>
                        <View style={{flexDirection: 'row'  , marginLeft:20}}>
                            <Image source={lokasi1} style={{width:20 , height:20}}/>
                            <Text style={{fontSize: 14  }}>Bali</Text>
                        </View>

                </View>

                <View style={{marginRight: 16}}>

                        <View style={{width: 150 ,height: 250}}> 
                            <Image source={sleman} style={{width:undefined , height:undefined , resizeMode: 'cover' , flex:1 , borderRadius: 12}}/>
                            <Text style={{fontSize: 19 ,fontWeight:"bold" , marginLeft:20 , marginTop:-10 , marginTop:5}}>Sleman</Text>
                        </View>
                        <View style={{flexDirection: 'row'  , marginLeft:20}}>
                            <Image source={lokasi1} style={{width:20 , height:20}}/>
                            <Text style={{fontSize: 14  }}>srilanka</Text>
                        </View>

                </View>
</ScrollView>
            </View>
        </ScrollView>
    </View> 







{/*tab bar*/}
    <View style={{height: 54 , flexDirection : 'row'}}> 

            <View style={{flex: 1 ,alignItems : 'center' , justifyContent : 'center'}}>
                    <Image style={{width: 39, height : 39 }} source={iconhome}/>
            </View>

            <View style={{flex: 1 ,alignItems : 'center' , justifyContent : 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                    <Image style={{width: 39, height : 39 }} source={iconar} />
                </TouchableOpacity>
            </View>
            
            <View style={{flex: 1 ,alignItems : 'center' , justifyContent : 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                    <Image style={{width: 39, height : 39 }} source={iconitinerary} />
                </TouchableOpacity>
            </View>
            
            <View style={{flex: 1 ,alignItems : 'center' , justifyContent : 'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')} >
                    <Image style={{width: 39, height : 39 }} source={iconprofile} />
                </TouchableOpacity>
            </View>         
        
    </View>

    </View>
    );
}
}


export default home;