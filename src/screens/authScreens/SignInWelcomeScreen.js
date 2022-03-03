import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters} from "../../global/styles";
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SignInWelcomeScreen(){
    return (
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.background2, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26, color:colors.background2, fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:8, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{uri:"https://pbs.twimg.com/media/FMvM8aMaUAA2ja2?format=jpg&name=medium"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{uri:"https://pbs.twimg.com/media/FLE_YfHagAUUXDl?format=jpg&name=medium"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://pbs.twimg.com/media/FJ2b0lHUUAAVcKM?format=jpg&name=medium"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://pbs.twimg.com/media/FH89m1-akAIg8qZ?format=jpg&name=medium"}}
                            style={{height:"100%", width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>
                <View style = {{marginHorizontal: 20, marginTop: 30}}>
                    <Button 
                        title = "SIGN IN"
                        buttonStyle = {parameters.StyleButton}
                        titleStyle = {parameters.buttonTitle}
                    />
                </View>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title = "Create an account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slide1: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    slide2: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5'
    },
    slide3: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
});