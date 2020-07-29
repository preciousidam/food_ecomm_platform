import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {useFonts} from '@use-expo/font';
import {SafeAreaView} from 'react-native-safe-area-context'

import { CircleButton, UseRoundedButton } from '../components/Buttons';
import Colors from '../../constants/Colors';
import ActionSheet from '../../components/ActionSheet';
import StyledInput from '../../components/TextInput';
import Layout from '../../constants/Layout';

export default function CheckoutScreen(props){

    const [fontLoaded] = useFonts({
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../../assets/fonts/Roboto-Light.ttf'),
    });

    const [cartExpanded, setCartExpanded] = useState(false);
    const [editUserDetail, setEditUserDetail] = useState(false)
    const [editDeliverDetail, setEditDeliveryDetail] = useState(false)
    const [editPaymentDetail, setEditPaymentDetail] = useState(false)

    return (

        <SafeAreaView 
            style={{flex: 1, padding: 0}}
            emulateUnlessSupported
        >
            <View styles={styles.container}>
                
                <View style={styles.banner}>
                    <Image 
                        style={styles.bannerImage} 
                        source={require('../assets/images/svg/undraw_shopping_app_flsj.png')} 
                    />
                    <Image 
                        style={styles.bannerImage} 
                        source={require('../assets/images/svg/undraw_online_groceries_a02y.png')} 
                    />
                </View>
                <Text style={[styles.header, styles.head]}>Checkout details</Text>
                {fontLoaded && 
                (<ScrollView contentContainerStyle={styles.scroll}>
                    <View style={styles.card}>
                        <View style={styles.line}></View>
                        <View style={styles.details}>
                            <CircleButton
                                style={[styles.circle,{backgroundColor: 'purple'}]}
                                component={
                                    <FontAwesome5 name='user-circle' size={30} color={Colors.darkHighlight} />
                                }
                            />
                            <TouchableOpacity style={styles.textView} 
                                onPress={() => setEditUserDetail(!editUserDetail)}
                            >
                                {editUserDetail ? (<View>
                                    <StyledInput 
                                        style={styles.styleInput}
                                        component={
                                            <TextInput 
                                                value="Idam Ebubechukwu"
                                                placeholderTextColor={Colors.secondaryColor}
                                            />
                                        }
                                    />
                                    <StyledInput 
                                        style={styles.styleInput}
                                        component={
                                            <TextInput 
                                                value="08162300796"
                                                placeholderTextColor={Colors.secondaryColor}
                                            />
                                        }
                                    />
                                    <UseRoundedButton
                                        style={styles.rounded}
                                        component={<Text style={styles.roundText}>Update</Text>}    
                                    />
                                </View>):
                                (<View>
                                    <Text ellipsizeMode='tail' style={styles.header}>Recipients Detail</Text>
                                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.subHeader}>Idam Ebubechukwu -- 08162300796</Text>
                                </View>)}
                            </TouchableOpacity>
                            <FontAwesome5 size={30} name='angle-right' color="#888" onPress={() => setEditUserDetail(!editUserDetail)} />
                        </View>
                        <View style={styles.details}>
                            <CircleButton
                                style={[styles.circle,{backgroundColor: Colors.tintBackground}]}
                                component={
                                    <FontAwesome5 name='truck' size={25} color={Colors.darkHighlight} />
                                }
                            />
                            <TouchableOpacity style={styles.textView}>
                                <Text ellipsizeMode='tail' style={styles.header}>Delivery Address</Text>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.subHeader}>Ahmadu bello way, Victoria Island Lagos </Text>
                            </TouchableOpacity>
                            <FontAwesome5 size={30} name='angle-right' color="#888" />
                        </View>
                        <View style={styles.details}>
                            <CircleButton
                                style={[styles.circle,{backgroundColor: Colors.secondaryColor}]}
                                component={
                                    <FontAwesome5 name='dollar-sign' size={30} color={Colors.darkHighlight} />
                                }
                            />
                            <TouchableOpacity style={styles.textView}>
                                <Text ellipsizeMode='tail' style={styles.header}>Payment Method</Text>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.subHeader}>**** **** **** 8262</Text>
                            </TouchableOpacity>
                            <FontAwesome5 size={30} name='angle-right' color="#888" />
                        </View>
                    </View>
                </ScrollView>)}
                

            </View>
            <ActionSheet
                    expanded={cartExpanded}
                    toggle={setCartExpanded}
                    minView={
                        <View style={styles.headerBar} >
                            <CircleButton
                                style={[styles.circle]}
                                component={<FontAwesome5 size={24} name='shopping-cart' color={Colors.darkHighlight} />}
                            />
                            <Text style={styles.cartHeader}>Cart summary</Text>
                        </View>
                    }

                    maxView={
                        <Cart />
                    }
                />
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: Layout.window.width,
        height: Layout.window.height,
        paddingBottom: 400,
    },
    scroll: {
        width: Layout.window.width,
        padding: 20,
        paddingBottom: 400,
    },
    banner: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 15,
        flexDirection: 'row-reverse',
    },
    bannerImage: {
        width: '50%',
        height: Layout.window.height/4.5,
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    line: {
        position: 'absolute',
        backgroundColor: '#aaa',
        top: 25,
        bottom: 10,
        left: 40,
        height: '80%',
        width: 2,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 18
    },
    subHeader: {
        fontFamily: 'roboto-bold',
    }, 
    textView: {
        width: '70%', 
        justifyContent: 'center'
    },
    head: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    circle: {
        backgroundColor: '#25D366',
        flex: 2,
    },
    cartHeader: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 8,
        marginHorizontal: 20,
        textAlignVertical: 'center',
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        padding: 20,
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
    title: {
        fontFamily: 'roboto-regular',
        color: '#aaa', 
        fontWeight: 'bold'
    },
    sectionView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rounded: {
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginVertical: -10
    },
    roundText: {
        color: Colors.darkHighlight,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})

function Cart(){
    return (
        <View style={{paddingHorizontal: 20}}>
            <View style={styles.headerBar}>
                        <CircleButton
                            style={[styles.circle]}
                            component={<FontAwesome5 size={24} name='shopping-cart' color={Colors.darkHighlight} />}
                        />
                        <Text style={styles.cartHeader}>Cart summary</Text>
                    </View>
        <View style={styles.sectionView}>
                    <Text style={styles.header}>Subtotal(4 items)</Text>
                    <Text style={styles.header}>NGN 45000</Text>
                </View>
                <View style={styles.sectionView}>
                    <Text style={[styles.title, {marginBottom: 30}]}>Discount</Text>
                    <Text style={[styles.title, {marginBottom: 30}]}>NGN -750</Text>
                </View>
               
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
                
            </View>
        </View>
    )
}