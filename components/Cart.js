import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {useFonts} from '@use-expo/font';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import {CircleButton, UseRoundedButton} from '../components/Buttons';
import SlideDownPanel from '../components/SlideDownPanel';
import StyledInput from './TextInput';



export default function CartHighlight(props){

    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    const [expanded, setExpanded] = useState(false);

    return (
        fontLoaded &&(
        <SlideDownPanel 
            style={[styles.container, {paddingTop: expanded ? 50 : 20}]} 
            isExpanded={bool => setExpanded(bool)}
            maxHeight='100%'
            minHeight='12%'
        >
           
            <View style={{height: '100%'}}>
                <View style={styles.sectionView}>
                    <Text style={styles.header}>Subtotal(4 items)</Text>
                    <Text style={styles.header}>NGN 45000</Text>
                </View>
                <View style={styles.sectionView}>
                    <Text style={[styles.title, {marginBottom: 30}]}>Discount</Text>
                    <Text style={[styles.title, {marginBottom: 30}]}>NGN -750</Text>
                </View>
                {expanded &&(
                <View>
                <View style={styles.sectionView}>
                    <Text style={[styles.title, {marginBottom: 30}]}>Delivery charges(Home delivery)</Text>
                    <Text style={[styles.title, {marginBottom: 30}]}>NGN 1000</Text>
                </View>
                <View style={styles.sectionView}>
                    <Text style={[styles.title, {marginBottom: 30}]}>Add coupons</Text>
                    <StyledInput 
                        style={styles.styleInput}
                        component={
                            <TextInput 
                                placeholder='COUPON'
                                placeholderTextColor={Colors.secondaryColor}
                            />
                        }
                    />
                </View>
                <View style={[styles.sectionView, {marginVertical: 40}]}>
                    <Text style={styles.header}>Est. Total</Text>
                    <Text style={styles.header}>NGN 45250</Text>
                </View>
                <View style={[styles.sectionView]}>
                    <UseRoundedButton 
                        style={styles.rounded}
                        onPress={() => props.onPress({total: 45250, sub: 45000, discount: 750, coupon: ''})}
                        component={
                            <Text style={{color: Colors.darkHighlight}}>CHECKOUT</Text>
                        }
                    />
                </View>
            </View>)}
            </View>
        </SlideDownPanel>)
    ); 
}



export function CartItemList(props){
    const [fontLoaded] = useFonts({
        'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Light.ttf'),
    });

    function item({item}){
        return (
            <CartItem {...item} />
        );
    }

    return (
        fontLoaded &&(
        <View style={{ width: '100%', backgroundColor: '#fff'}}>
            <FlatList
                data={props.data}
                renderItem={item}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 20}}
            />
        </View>)
    );
}


export function CartItem(item){
    return(
        <TouchableOpacity style={{backgroundColor: '#fff'}}>
            <View style={styles.card}>
                <View style={styles.imageView}>
                    <Image style={styles.prodImage} source={item.path} />
                    <Text style={{
                                backgroundColor: Colors.primaryColor, 
                                color: Colors.darkHighlight,
                                textTransform: 'uppercase',
                                padding: 5,
                                position: 'relative',
                                bottom: 0,
                                top: 100,
                                width: 55,
                            }}>{item.pack}</Text>
                </View>
                <View style={{flex: 4, padding: 10, height: 152, backgroundColor: '#fff'}}>
                    <View style={{flexDirection: 'row', margin: 0}}>
                        <View style={styles.priceView}>
                            <Text style={styles.price}>NGN {item.price}</Text>
                            <Text>{item.title}</Text>
                        </View>
                        <MaterialCommunityIcons name="delete-outline" size={30} color="#aaa" style={{flex: 1}} />
                    </View>
                    <View style={styles.countView}>
                        <CircleButton 
                            style={styles.circle}
                            component={
                                <MaterialCommunityIcons name="minus" size={30} color="#aaa" />
                            }
                        />
                        <Text>{item.count}</Text>
                        <CircleButton 
                            style={styles.circle}
                            component={
                                <MaterialCommunityIcons name="plus" size={30} color="#aaa" />
                            }
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>  
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        elevation: 15,
        shadowColor: '#555',
        shadowOpacity: 0.4,
        marginBottom: 20
    },
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 17,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'roboto-regular',
        color: '#aaa', 
        fontWeight: 'bold'
    },
    view: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    circle: {
        borderColor: '#555', 
        width: 60, 
        height: 60,
        borderRadius: 30,
    },
    sectionView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
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
        height: 150,
        width: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        flex: 1
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        height: 150,
        marginVertical: 20,
        flexDirection: 'row',
        elevation: 5,
    },
    fav: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row-reverse',
        padding: 15,
    },
    priceView: {
        flex: 4,
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#555',
    },
    price: {
        fontWeight: 'bold',
    },
    imageView: {
        height: 200,
        width: 120,
    },
    countView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    styleInput: {
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: Colors.secondaryColor,
        borderBottomColor: Colors.secondaryColor,
        borderStyle: 'dotted',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: -10,
    },
    rounded: {
        backgroundColor: Colors.secondaryColor,
    }
})