import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';


import Colors from '../../constants/Colors';
import Categories, {MealList} from '../../components/Category';
import data from '../../constants/Data';

const categories = [
    {iconName: 'food', title: 'Meals', id: '1'},
    {iconName: 'leaf', title: 'Farm Product', id: '2'},
    {iconName: 'cart', title: 'Groceries', id: '3'},
    {iconName: 'leaf', title: 'Farm Product', id: '4'},
    {iconName: 'food', title: 'Meals', id: '5'},
];


export default function ShopScreen(props){
    return (
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#fff'}}>
            
            <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 20,}}>
                <MealList onPress={props.navigation.navigate} data={data} title={'Best Meals on the menu'} />
            </View>
           
            <StatusBar barStyle='light-content' backgroundColor={Colors.statusBar} />
        </View>
    )
}