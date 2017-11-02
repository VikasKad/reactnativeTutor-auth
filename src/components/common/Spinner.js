import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {

    return (
        <View style={styles.viewStyle}>
            <ActivityIndicator size={size | 'large'} />
        </View>
    );
};
const styles = {
    viewStyle: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    }
}
export {Spinner};