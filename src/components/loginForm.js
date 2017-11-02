import React, {Component} from 'react';
import {Button, Card, Input, CardSection} from "./common";

export default class LoginForm extends Component {
    state = {email: '',password:''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input

                        label={"Email"}
                        placeholder={"user@mail.com"}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label={"Password"}
                        placeholder={"password"}
                        value={this.state.password}
                        onChangeText={password=>this.setState({password})}
                    />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}
