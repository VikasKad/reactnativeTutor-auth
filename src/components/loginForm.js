import React, {Component} from 'react';
import {Button, Card, Input, CardSection} from "./common";

export default class LoginForm extends Component {
    state = {email: ''};

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
                <CardSection/>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}
