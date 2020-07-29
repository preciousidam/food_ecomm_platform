import React, { useState ,useEffect, useRef} from 'react';
import {View, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity, Text} from 'react-native';
import {useFonts} from '@use-expo/font'


import Colors from '../constants/Colors';
import {UseFlatButton, UseRoundedButton} from '../components/Buttons';
import Layout from '../constants/Layout';


if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ActionSheet(props){

    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    const [height, setHeight] = useState(100)
    const ref = useRef()

    useEffect(
        () => {
           toggleBox();
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
    };

    return (
        fontLoaded &&(
           
                <TouchableOpacity 
                    style={[styles.container, props.style]}  
                    onPress={() => props.toggle(!props.expanded)}
                >
                    {props.expanded &&<View style={styles.overlay}></View>}
                    {!props.expanded ? props.minView: props.maxView}
                    
                    {props.expanded && <View style={styles.actionView}>
                        <UseFlatButton
                            style={styles.flat}
                            component={<Text style={styles.flatText}>Cancel</Text>}
                            
                        />

                        <UseRoundedButton
                            style={styles.rounded}
                            component={<Text style={styles.roundText}>pay now</Text>}
                            
                        />
                    </View>}
                    
                </TouchableOpacity>

            )
    ); 
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,

    },
    flatText: {
        color: Colors.secondaryColor,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    flat: {
       paddingVertical: 20,
       paddingHorizontal: 50,
       marginTop: -10,
    },
    rounded: {
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginVertical: -10
    },
    roundText: {
        color: Colors.darkHighlight,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    actionView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    overlay: {
        width: '100%',
        height: Layout.window.height * 43/100,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: -Layout.window.height * 43/100,
    }
});