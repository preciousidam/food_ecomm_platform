import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './ShopDrawerNavigation';


export default function HomeStackScreen(props){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='shop'
                component={DrawerNavigator}
            />
        </Stack.Navigator>
    );
}