import React from 'react';
import {FlatList, View, Text, StyleSheet,} from 'react-native';
import {useFonts} from '@use-expo/font'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import {CircleButton, UseFlatButton} from '../components/Buttons';
import SlideDownPanel from '../components/SlideDownPanel';
import Meal from '../components/Meal';




export default function Categories(props){

    const HEIGHT = '22%';

    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    

    function item({item}){
        return (
            <View style={styles.view}>
                <CircleButton 
                    style={styles.circle}
                    component={
                        <MaterialCommunityIcons 
                            name={item.iconName} 
                            size={40} 
                            color={Colors.secondaryColor}
                        />
                    }
                />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    return (
        fontLoaded &&(
            <SlideDownPanel minHeight={HEIGHT} maxHeight='100%'>
                <Text style={styles.header}>All Categories</Text>
                <FlatList
                    data={props.data}
                    renderItem={item}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    numColumns={4}
                    contentContainerStyle={styles.flatlistCat}
                />
            </SlideDownPanel>
        )
    ); 
}



export function MealList(props){
    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    function item({item}){
        return (
            <Meal {...item} onPress={props.onPress} />
        );
    }

    return (
        fontLoaded &&(
        <View>
            <FlatList
                data={props.data}
                renderItem={item}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>)
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 10,
        shadowColor: '#ccc',
        shadowOpacity: 0.6,
    },
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 17,
        marginHorizontal: 40,
    },
    title: {
        fontFamily: 'roboto-regular',
        color: '#aaa', 
        fontWeight: 'bold',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: Colors.tintBackground, 
        width: 70, 
        height: 70,
        borderRadius: 35,
        marginHorizontal: 10,
        marginTop: 10,
    },
    sectionView: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 30,
    },
    sectionHeader: {
        fontFamily: 'roboto-bold',
        fontSize: 15,
        color: '#555'
    },
    prodImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 120,
        width: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 150,
        height: 200,
        marginHorizontal: 15,
    },
    fav: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
        padding: 15,
    },
    priceView: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        top: 80,
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: 'bold',
        color: '#555',
    },
    price: {
        fontWeight: 'bold',
    },
    toggle: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    outterCont: {

    },
    flatlistCat: {
        height: '100%', 
        width: '100%', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },

})