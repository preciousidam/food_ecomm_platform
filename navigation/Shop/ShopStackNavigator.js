import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import ShopTabNavigator from './ShopTabNavigation';
import {ProductDetails} from '../../screens/shop/DetailsScreen';
import CheckoutScreen from '../../screens/shop/CheckoutScreen';
import Colors from '../../constants/Colors';
import {LeftBar, LeftBarFav} from '../../components/LeftBar';

export default function ShopStackNavigator(props){

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            headerMode='screen'
            initialRouteName='shopNav'
        >
            <Stack.Screen 
                name="shopNav" 
                component={ShopTabNavigator} 
                options={({navigation}) => ({
                    title: 'Shop',
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
                                        />),
                    headerRight: () => (<LeftBar />),
                  })}
            />

            <Stack.Screen  
                name="prodDet" 
                component={ProductDetails}
                options={({navigation}) => ({
                    title: 'Dessert',
                    headerStyle: {
                      backgroundColor: Colors.darkHighlight,
                    },
                    headerTintColor: Colors.primaryColor,
                    headerRight: () => (<LeftBarFav />),
                  })}
            />    

            <Stack.Screen  
                name="checkout" 
                component={CheckoutScreen}
                options={({navigation}) => ({
                    title: 'Checkout',
                    headerStyle: {
                      backgroundColor: Colors.darkHighlight,
                      elevation: 0,
                    },
                  })}
            /> 
            
        </Stack.Navigator>
    )
}