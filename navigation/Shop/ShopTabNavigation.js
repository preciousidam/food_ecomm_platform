import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';

import ShopScreen from '../../screens/shop/ShopScreen';
import CartScreen from '../../screens/shop/CartScreen';
import FavoriteScreen from '../../screens/shop/FavoriteScreen';
import Colors from '../../constants/Colors';

const Tab = createMaterialTopTabNavigator();

export default function ShopTabNavigator() {



  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.darkHighlight,
            inactiveTintColor: Colors.tintColor,
            indicatorStyle:{
                backgroundColor: Colors.darkHighlight,
            },
            style: {
                backgroundColor: Colors.primaryColor,
                height: 60,
                justifyContent: 'center',
            },
            showIcon: true,
            showLabel: false,
        }}
    >
        <Tab.Screen 
            name='shopList' 
            component={ShopScreen} 
            options={{
                tabBarIcon: ({color}) => (<Entypo name="shop" size={24} color={color} />)
            }} 
        />

        <Tab.Screen 
            name='CartList' 
            component={CartScreen}  
            options={{
                tabBarIcon: ({color}) => 
                (<View>
                    <FontAwesome name="shopping-basket" size={20} color={color} />
                    <Badge badgeCount={6} />
                </View>)
            }} 
        />

        <Tab.Screen 
            name='FavoriteList' 
            component={FavoriteScreen}  
            options={{
                tabBarIcon: ({color}) => (<MaterialIcons name="favorite-border" size={24} color={color} />)
            }} 
        />
    </Tab.Navigator>
  );
}

function Badge(props){
    return (
        <View
            style={{
                // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 15,
                height: 15,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {props.badgeCount}
            </Text>
        </View>
    )
}