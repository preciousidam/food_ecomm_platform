import React from 'react';
import {TextInput, Text, View, ScrollView, StyleSheet} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import { Zocial } from '@expo/vector-icons';

import {UseRoundedButton} from '../../components/Buttons';
import Colors from '../../constants/Colors';
import StyledInput from '../../components/TextInput';


export default function ForgotPasswordScreen(props){
    const [fontLoaded] = useFonts({
        'roboto-regular': require('../../assets/fonts/Roboto-Light.ttf'),
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    })
    return(
        fontLoaded ? 
        (
            <View style={styles.container}>
                <View style={styles.firstview}>
                    <Text style={styles.header}>Forgot Password?</Text>
                    <Text style={{marginBottom: 30}}>Please enter enter your email address to reset password</Text>

                    <StyledInput 
                        component={
                            <TextInput 
                                placeholder='Email' 
                                keyboardType='email-address'
                                textContentType='emailAddress'
                            />
                        }
                    />
                    
                    
                    <View style={styles.actionView}>
                        <UseRoundedButton
                            style={styles.rounded}
                            component={
                                <Text 
                                    style={{
                                        color: Colors.darkHighlight, 
                                        backgroundColor: 'transparent'}}>
                                    RESET
                                </Text>} 
                        />
                    </View>
                </View>
            </View>
        ): <AppLoading />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    firstview: {
        backgroundColor: '#fff',
        borderBottomColor: '#fff',
        borderBottomStartRadius: 25,
        borderBottomEndRadius: 25,
        padding: 20,
        elevation: 10,
        shadowColor: '#ccc'
    },
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        textTransform: 'uppercase',

    },
    actionView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rounded: {
        backgroundColor: Colors.secondaryColor,
    },
});