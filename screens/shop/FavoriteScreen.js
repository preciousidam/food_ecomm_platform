import React from 'react';
import {View, StatusBar} from 'react-native';


import Colors from '../../constants/Colors';
import { MealList } from '../../components/Category';
import data from '../../constants/Data';


export default function FavorriteScreen(props){
    return (
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#fff',paddingHorizontal: 20, paddingVertical: 20,}}>
            <MealList onPress={props.navigation.navigate} data={data.slice(0,2)} title={'Best Meals on the menu'} />
            <StatusBar barStyle='light-content' backgroundColor={Colors.statusBar} />
        </View>
    )
}