import React from 'react';
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import {View, Text, Image, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Linking} from 'expo';

import Colors from '../constants/Colors';
import { StackView } from '@react-navigation/stack';

export default function DrawerSiderBar(props){
    return(
    <DrawerContentScrollView {...props} contentContainerStyle={{height: '100%'}}>
        
        <View style={styles.container}>
            <LinearGradient
            colors={[Colors.darkHighlight, '#f9f9f9']}
            style={styles.gradient}
            />
            <View style={styles.view}>
                <Image style={styles.image} source={require('../assets/images/person.png')}/>
                <Text style={styles.name}>Some Body Name Go here</Text>
                <Text style={styles.role}>Vendor</Text>
            </View>
            
        </View>
        <View style={styles.hill}>
            <DrawerItemList {...props}/>
            <View style={styles.hr}></View>
            <DrawerItem
                label="Help"
                onPress={() => Linking.openSettings()}
            />
        </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginBottom: 30,
        position: 'relative',
        top: -5,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
    },
    image: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 35,
        backgroundColor: '#fff',
    },  
    view: {
        padding: 30,
    },
    name: {
        color: Colors.darkHighlight,
        fontWeight: 'bold',
        marginTop: 20,
    },
    role: {
        color: Colors.darkHighlight,
    },
    hr: {
        height: 1,
        backgroundColor: '#ccc',
        margin: 10,
    },
    backImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    hill: {
        position: 'absolute',
        height: '70%',
        width: '100%',
        bottom: 0,
        backgroundColor: Colors.primaryColor,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 50,
        borderTopEndRadius: 50,
    },
})