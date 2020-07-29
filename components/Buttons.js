import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';

export function UseRoundedButton(props){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} >
            <View style={[styles.rounded, props.style]}>
                {props.component }
            </View>
        </TouchableOpacity>
    );
}

export function UseFlatButton(props){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
            <View style={props.style}>
                {props.component }
            </View>
        </TouchableOpacity>
    );
}

export function CircleButton(props){
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
            <View style={[styles.circle, props.style]}>
                {props.component }
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    rounded: {
        backgroundColor: Colors.darkHighlight,
        borderColor: Colors.darkHighlight,
        borderRadius: 5,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        paddingHorizontal: 70,
        paddingVertical: 15,
        marginVertical: 30,
    },
    circle: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#fff',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    }
})