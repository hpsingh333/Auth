import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardSection = (props)=>{
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles= StyleSheet.create({
    containerStyle:{
        paddingTop:5,
        paddingLeft:5,
        paddingBottom:5,
        paddingRight:5,
        borderBottomWidth:1,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative'
    }
})

export {CardSection};