import React from 'react';
import {createNativeStackNavigator, TransitionPresets} from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack(){
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                option = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                option = {{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    );
}