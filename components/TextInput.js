import React from 'react';
import {View, StyleSheet} from 'react-native';


export default function StyledInput(props){
    return (
        <View style={[styles.view, props.style]}>
            {props.component}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 15,
    }
});