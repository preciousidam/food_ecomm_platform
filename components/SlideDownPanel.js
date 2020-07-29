import React, {useState, useEffect} from 'react';
import {View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity} from 'react-native';
import {useFonts} from '@use-expo/font'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function SlideDownPanel(props){
    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    const [height, setHeight] = useState(props.minHeight);

    useEffect(
        () => {
            if(props.isExpanded)
                props.isExpanded(height == props.maxHeight ? true : false);
        }
    );

    const toggleBox = () => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(
            500,
            LayoutAnimation.Types.easeInEaseOut,
            LayoutAnimation.Properties.scaleY
          )
        );
        setHeight(height == props.minHeight ? props.maxHeight : props.minHeight);
        
    };


    
    return (
        fontLoaded &&(
                <TouchableOpacity 
                    style={[styles.container, {height, paddingBottom: height == props.minHeight ? 10: 10}, props.style]}  
                    onPress={() => toggleBox()}>
                    {props.children}
                    <MaterialCommunityIcons 
                        size={40} name={height == props.minHeight ? 'chevron-down': 'chevron-up'}
                        color={height == props.minHeight? Colors.darkHighlight: Colors.secondaryColor} 
                        onPress={() => toggleBox()}
                        style={[styles.toggle, {bottom: height == props.minHeight ? -30: 30}]}
                    />
                </TouchableOpacity>
                
           
            )
    ); 
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 10,
        shadowColor: '#ccc',
        shadowOpacity: 0.6,
    }, 
    toggle: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },

})