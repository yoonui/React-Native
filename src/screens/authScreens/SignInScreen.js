import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from "../../global/styles";
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';

export default function SignInScreen(){
    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left"/>
            <View>
                <Text style={title}>Sign-In</Text>
            </View>
            <View>
                <Text style={styles.text1}>Please enter the email and password</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    text1:{
        color : colors.grey4,
        fontSize : 16
    }
});