import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ShopTabNavigator from './ShopTabNavigation';
import {ProductDetails} from '../screens/DetailsScreen';
import Colors from '../constants/Colors';


export default function ProfileStackNavigator(props){

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            screenOptions={({navigation}) => ({
                title: 'Profile',
                headerStyle: {
                backgroundColor: Colors.primaryColor,
                },
                headerTintColor: Colors.darkHighlight,
                headerLeft: () => (
                                    <Ionicons 
                                    name='ios-menu' 
                                    size={30}
                                    color={Colors.darkHighlight}
                                    style={{marginLeft: 30}}
                                    onPress={ () => navigation.toggleDrawer()}
                                    />)
            })}
        >
            <Stack.Screen name="shopNav" component={ShopTabNavigator}/>
            <Stack.Screen name="prodDet" component={ProductDetails}/>
        </Stack.Navigator>
    )
}