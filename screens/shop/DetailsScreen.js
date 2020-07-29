import React, {useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useFonts} from '@use-expo/font';
import { Rating } from 'react-native-elements';

import Colors from '../../constants/Colors';
import {CircleButton, UseFlatButton, UseRoundedButton} from '../../components/Buttons';


export function ProductDetails({navigation,route}){

    const {title, pack, path, price, desc} = route.params;
    const [fontLoaded] = useFonts({
        'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('../../assets/fonts/Roboto-Light.ttf'),
    });

    useEffect(
        () => {
            
            navigation.setOptions({
                title: title,
            });
        },[]
    )

    return( 
        fontLoaded &&
        (<ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={path} />
                <Text style={styles.pack}>{pack}</Text>
                <Text style={styles.price}>NGN {price}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Rating 
                    type='custom'
                    ratingBackgroundColor='transparent'
                    onFinishRating={ rating => console.log(rating)}
                    style={{ paddingVertical: 10, backgroundColor: 'transparent' }}
                />
                <View style={styles.view}>
                    <Text style={styles.qty}>Quantity</Text>
                    <View style={styles.count}>
                        <CircleButton 
                            style={styles.circle}
                            component={
                                <MaterialCommunityIcons name="minus" size={30} color="#aaa" />
                            }
                        />
                        <Text style={{fontFamily: 'roboto-bold',}}>26kg</Text>
                        <CircleButton 
                            style={styles.circle}
                            component={
                                <MaterialCommunityIcons name="plus" size={30} color="#aaa" />
                            }
                        />
                    </View>
                    <View style={styles.btnCont}>
                        <UseRoundedButton
                            style={styles.rounded}
                            component={
                                <Text 
                                    style={{textTransform: 'uppercase', 
                                        color: Colors.darkHighlight,
                                        fontFamily: 'roboto-bold',
                                    }}>
                                        Buy now
                                </Text>
                            }
                        />
                        <UseFlatButton 
                            component={
                                <Text 
                                    style={{textTransform: 'uppercase', 
                                        color: Colors.secondaryColor,
                                        fontFamily: 'roboto-bold',
                                    }}>
                                        Add to Cart
                                </Text>
                            }
                        />
                    </View>
                </View>
            </View>
        </ScrollView>     
        )
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 250,
    },
    pack: {
        width: 70,
        position: 'relative',
        textTransform: 'uppercase',
        backgroundColor: Colors.secondaryColor,
        color: Colors.darkHighlight,
        padding:  10,
        fontWeight: 'bold',
        marginLeft: 20,
        top: -230,
        left: -160,
    },
    price: {
        fontFamily: 'roboto-bold',
        fontSize: 30,
    },
    desc: {
        fontFamily: 'roboto-bold',

    },
    view: {
        margin: 30,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    count: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
    },
    qty: {
        fontFamily: 'roboto-bold',
        marginTop: 30,
    },
    circle:{
        borderColor: '#555'
    },
    rounded: {
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 70,
        paddingVertical: 20,
    },
    btnCont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})