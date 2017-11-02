import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({label, value, onChangeText,placeholder,secureTextEntry}) => {
    const {inputStyle, labelStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        // height:20,
        // width:100
    },
    labelStyle: {
        fontSize: 18,
        // paddingLeft: 20,
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row'
    }
}
export {Input};