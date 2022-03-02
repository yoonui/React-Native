import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters} from "../../global/styles";
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

export default function SignInWelcomeScreen(){
    return (
        <View>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:26, color:colors.background2, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26, color:colors.background2, fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>
            <View></View>
        </View>
    );
}