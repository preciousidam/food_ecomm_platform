import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ShopStackNavigator from '../Shop/ShopStackNavigator';
import BookingsStackNavigator from '../Booking/BookingsStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';
import Colors from '../../constants/Colors';
import DrawerSiderBar from '../../components/Drawer';
import {Entypo, FontAwesome, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';

const auth = null;

export default function DrawerNavigator(props){
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerSiderBar {...props} />}
            drawerContentOptions={{
                activeBackgroundColor: Colors.primaryColor,
                activeTintColor: Colors.darkHighlight,
                inactiveTintColor: Colors.darkHighlight,
                labelStyle: {
                    fontWeight: 'bold'
                },
            }}
            drawerStyle={{
                width: '80%',
                height: '100%'
            }}
        >
            <Drawer.Screen 
                name='Shop' 
                component={ShopStackNavigator} 
                options={{
                    title: 'Shop',
                    headerStyle: {
                      backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.darkHighlight,
                    drawerIcon: ({size, color}) => (<FontAwesome name="shopping-basket" color={color} size={size} />),
                }}
            />
            <Drawer.Screen 
                name='Bookings' 
                component={BookingsStackNavigator} 
                options={{
                    title: 'Bookings',
                    headerStyle: {
                      backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.darkHighlight,
                    drawerIcon: ({size, color}) => (<MaterialCommunityIcons name="calendar-check" color={color} size={size} />),
                }}
            />
              
            { auth && <Drawer.Screen 
                name='Profile' 
                component={ProfileStackNavigator}
                options={{
                    title: 'Profile',
                    headerStyle: {
                      backgroundColor: Colors.primaryColor,
                    },
                    headerTintColor: Colors.darkHighlight,
                    drawerIcon: ({size, color}) => (<MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size} />),
                }} 
            />}
        </Drawer.Navigator>
    );
}