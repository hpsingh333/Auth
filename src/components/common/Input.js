import React from 'react';
import {View, TextInput, Text } from 'react-native';

const Input= ({value, placeholder, label, secureTextEntry,onChangeText}) =>{
    const {textStyle, inputStyle, containerStyle}=styles;
    return(
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput 
                style={inputStyle}
                secureTextEntry={secureTextEntry}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
    )
}

const styles={
    textStyle:{
        fontSize:18,
        color:'#000',
        flex:1,
        paddingLeft:10,
    },
    inputStyle:{
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        flex:2,
        color:'#000',
        lineHeight:23,
    },
    containerStyle:{
        flexDirection:'row',
        flex:1,
        height:50,
        alignItems:'center'
    }
}

export {Input};