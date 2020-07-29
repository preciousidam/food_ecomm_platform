import React from 'react';
import {Text, StatusBar, View, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';


export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>FUUDZIE</Text>
            <StatusBar barStyle='light-content' backgroundColor={Colors.primaryColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor, 
        flex: 1, 
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    }
})