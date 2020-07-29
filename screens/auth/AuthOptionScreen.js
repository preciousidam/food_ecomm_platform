import React, {useEffect} from 'react';
import {Image, Text, View, StatusBar, StyleSheet} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Colors from '../../constants/Colors';
import {UseFlatButton, UseRoundedButton } from '../../components/Buttons';


export default function AuthOptionScreen(props){

    const [fontLoaded] = useFonts({
        'roboto-regular': require('../../assets/fonts/Roboto-Light.ttf'),
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    })

    
    if(fontLoaded){
        return(
        
            (<View style={styles.container}>
                <View style={styles.imageView}><Image style={styles.logo} source={require('../../assets/images/logo.png')} /></View>
                <View style={styles.bottomView}>
                    <Text style={styles.text}>Welcome to</Text>
                        
                    <Text style={styles.text}>
                        <Text style={[styles.text, {fontWeight: 'bold', fontFamily: 'roboto-regular'}]}>FUUDZIE  </Text>
                        PLATFORM
                    </Text>
                    
                    <UseRoundedButton 
                        component={<Text style={{fontWeight: 'bold'}}>SIGN IN</Text>}
                        onPress={ () => props.navigation.navigate('SignIn')}
                    />
                    <UseFlatButton 
                        onPress={() => props.navigation.navigate('SignUp')}
                        component={
                            <Text style={{fontWeight: 'bold', 
                                textTransform: 'uppercase', 
                                color: Colors.darkHighlight}}>
                            SIGN UP</Text>} 
                    />
                    
                    <StatusBar barStyle='light-content' backgroundColor={Colors.primaryColor} />
                </View>
            </View>)
            
        );
    }else{
        return(<AppLoading />)
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primaryColor
    },
    logo: {
        width: 120,
        height: 120,
    },
    imageView: {
        backgroundColor: Colors.darkHighlight,
        marginVertical: 100,
        padding: 20,
        borderRadius: 80,
    },
    bottomView: {
        position: 'relative',
        bottom: 0,
        top: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: Colors.darkHighlight,
        fontSize: 25,
        fontFamily: 'roboto-regular',
        textTransform: 'uppercase',
    },
    sideBySide: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    }
})