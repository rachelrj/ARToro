import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import { Form, Button } from 'react-bootstrap';
import rp from 'request-promise';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            name: '',
            isLoading: false,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    // componentDidMount() {
    //     this.refs.form.onsubmit = () => this.sendEmail();
    // }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    sendEmail(e) {
        if (e) {
            e.stopPropagation();
        }
        var url = window.location.href
        var arr = url.split("/");
        var result = arr[0] + "//" + arr[2];
        var options = {
            method: 'POST',
            uri: result + "/email",
            body: {
                "message": this.state.message,
                "email": this.state.email,
                "name": this.state.name
            },
            json: true
        };
        return rp(options).then(() => {
                // this.setState({isLoading: false});
          }).catch(function (err) {
        });
    }

    // useEffect(() => {
    //     if (isLoading) {
    //       sendEmail().then(() => {
    //             this.setState({isLoading: false});
    //       }).catch(function (err) {
    //       });
    //     }
    // }, [isLoading]); sendEmail

    // const handleClick = () => this.setState({isLoading: true});

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <div className="contactPage">
                    <h1>Write to Me</h1>
                    <Form>
                        <Form.Group controlId="formBasicContact">
                            <Form.Control type="text" placeholder="Your name" onChange={this.handleNameChange} />
                            <Form.Control type="email" placeholder="Your email" onChange={this.handleEmailChange} />
                            <Form.Text>
                                I'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control as="textarea" rows="5" type="text" placeholder="Your message" onChange={this.handleMessageChange} />
                        </Form.Group>
                        <Button variant="primary" onClick={this.sendEmail}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <Footer/>
            </Provider>
    );
    }
}

const mapStateToProps = state => {
    const components = getComponents(state);
    return {
        projects: components.projects
    }
};
export default connect(mapStateToProps)(Contact);
