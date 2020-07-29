import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import {useFonts} from '@use-expo/font'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';



export default function Meal(props){
    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });
    return(
        <TouchableOpacity activeOpacity={0.7} style={[styles.card, props.style]}  onPress={() => props.onPress('prodDet', {...props})}>
            <View style={styles.card}>
                <Image style={styles.mealImage} source={props.path} />
               <View style={styles.detail}>
                    <Text style={styles.header}>{props.title}</Text>
                    <Text style={styles.desc}>{props.desc}</Text>
               </View>
               <View style={styles.rateSec}>
                    <Text style={styles.ratingText}>
                        <MaterialCommunityIcons
                            name='star'
                            size={24}
                            color={Colors.rating}
                            style={styles.rating}
                        />
                         <Text style={styles.rate}>{props.rating} </Text>
                          {props.numRate}
                    </Text>
                    <MaterialCommunityIcons
                            name='heart'
                            size={24}
                            color={Colors.tintColor}
                            style={styles.favorite}
                        />
               </View>
                <Text style={styles.eta}>{props.eta} mins</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: Colors.darkHighlight,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    mealImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    detail: {
        paddingTop: 10,
    },
    rateSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
    },
    desc: {
        textTransform: 'capitalize',
    },
    rate: {
        fontFamily: 'roboto-bold',
    },
    eta: {
        position: 'relative',
        top: -150,
        right: -220,
        width: 130,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        fontFamily: 'roboto-bold',
    }
})