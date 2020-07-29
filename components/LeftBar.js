import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export function LeftBar(props){
    return (
        <View style={[styles.view, props.stylesBackground]}>
            <Ionicons color={Colors.darkHighlight} size={30} name='ios-search' style={[styles.icons, props.style]} />
            <MaterialCommunityIcons color={Colors.darkHighlight} size={30} name='filter-outline' style={[styles.icons, props.style]} />
        </View>    
    );
}

export function LeftBarFav(props){
    return (
        <View style={[styles.view, props.stylesBackground]}>
            <Ionicons color={Colors.primaryColor} size={30} name='md-heart-empty' style={[styles.icons, props.style]} />
        </View>    
    );
}

const styles = StyleSheet.create({
    icons: {
        marginHorizontal: 10,
    },
    view: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 10,
    },
})