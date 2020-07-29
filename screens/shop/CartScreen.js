import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import CartHighlight, {CartItemList} from '../../components/Cart';
import data from '../../constants/Data';


export default function CartScreen(props){
    return (
        <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#fff'}}>
            <CartHighlight onPress={(summary) => props.navigation.navigate('checkout', {summary})} />
            <View style={{flex: 1, height: '100%', width: '100%', backgroundColor: '#fff'}}>
                <CartItemList data={data.slice(0,6)} />
            </View>
        </View>
    )
}