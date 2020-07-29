import React from 'react';
import {TextInput, Text, View, ScrollView, Switch, StyleSheet} from 'react-native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';
import { Zocial } from '@expo/vector-icons';

import {UseRoundedButton, CircleButton} from '../../components/Buttons';
import Colors from '../../constants/Colors';
import StyledInput from '../../components/TextInput';


export default function SignUpScreen(props){
    const [fontLoaded] = useFonts({
        'roboto-regular': require('../../assets/fonts/Roboto-Light.ttf'),
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    })
    return(
        fontLoaded ? 
        (<View style={styles.container}>
            <View style={styles.firstview}>
                <Text style={styles.header}>Welcome to fuudzie app</Text>
                <Text style={{marginBottom: 30}}>Please Log In</Text>

                <StyledInput 
                    component={
                        <TextInput 
                            placeholder='Username' 
                            textContentType='username'
                        />
                    }
                />

                <StyledInput 
                    component={
                        <TextInput 
                            placeholder='Email / username' 
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                    }
                />
                
                <StyledInput 
                    component={
                        <TextInput 
                            placeholder='Password'
                            textContentType='password'
                            secureTextEntry={true}
                        />
                    }
                />

                <StyledInput 
                    component={
                        <TextInput 
                            placeholder='Address' 
                            textContentType='addressCityAndState'
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
                                SIGN UP
                            </Text>} 
                    />
                    <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row-reverse'}}>
                        <Text style={{fontWeight: 'bold'}}>Vendor?</Text>
                        <Switch />
                    </View>
                    
                </View>
                <View style={styles.socialView}>
                    <CircleButton 
                        style={{backgroundColor: Colors.google}}
                        component={
                            <Zocial name='google' size={30} color={Colors.darkHighlight} />
                        }
                    />
                    <CircleButton  
                        style={{backgroundColor: Colors.facebook}}
                        component={
                            <Zocial name='facebook' size={30} color={Colors.darkHighlight}/>
                        }
                    />
                    <CircleButton 
                        style={{backgroundColor: Colors.twitter}}
                        component={
                            <Zocial name='twitter' size={30} color={Colors.darkHighlight}/>
                        }
                    />
                </View>
            </View>    
        </View>): <AppLoading />
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
    socialView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 50
    }
});