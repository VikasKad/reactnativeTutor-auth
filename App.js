import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Button, Spinner} from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/loginForm';

export default class App extends React.Component {
    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAG4FLtxW6eLqOnPkxzXej43R_lQmOpK7s',
            authDomain: 'reactfirebaseauthdemo.firebaseapp.com',
            databaseURL: 'https://reactfirebaseauthdemo.firebaseio.com',
            projectId: 'reactfirebaseauthdemo',
            storageBucket: 'reactfirebaseauthdemo.appspot.com',
            messagingSenderId: '178363633694'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }

        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication!'}/>
                {this.renderContent()}
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
