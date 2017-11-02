import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/loginForm';
export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAG4FLtxW6eLqOnPkxzXej43R_lQmOpK7s',
            authDomain: 'reactfirebaseauthdemo.firebaseapp.com',
            databaseURL: 'https://reactfirebaseauthdemo.firebaseio.com',
            projectId: 'reactfirebaseauthdemo',
            storageBucket: 'reactfirebaseauthdemo.appspot.com',
            messagingSenderId: '178363633694'
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication!'}/>
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
