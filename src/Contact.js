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
            hasSent: false,
            hasError: false,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleEmailSent = this.handleEmailSent.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.hasError = this.hasError.bind(this);
    }

    handleEmailSent() {
        this.setState({hasSent: true});
    }

    hasError() {
        this.setState({hasError: true});
    }

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
        return rp(options).then(function (response) {
            this.handleEmailSent();
        }.bind(this)).catch(function (response) {
            this.hasError();
        }.bind(this));
    }

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <div className="contactPage">
                {!this.state.hasSent && !this.state.hasError &&
                    <>
                    <h1>Write to Me</h1>
                    <Form>
                        <Form.Group controlId="formBasicContact">
                            <Form.Control required type="text" placeholder="Your name" onChange={this.handleNameChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide your name.
                            </Form.Control.Feedback>
                            <Form.Control required type="email" placeholder="Your email" onChange={this.handleEmailChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide your email so that I can respond to you!
                            </Form.Control.Feedback>
                            <Form.Text>
                                I'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control required as="textarea" rows="5" type="text" placeholder="Your message to me about a commission or private art instruction, or just saying hello." onChange={this.handleMessageChange} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a message regarding your inquiry.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" onClick={this.sendEmail}>
                            Submit
                        </Button>
                    </Form>
                    </>
                }
                {this.state.hasSent && !this.state.hasError &&
                    <>
                    <h1>Thank You!</h1>
                    <div id="contact-content">
                        <p>I appreciate that you’ve taken the time to write me. I will get back to you as soon as possible, usually within a few days. I will respond to you through my business gmail using the email address you just provided.</p>
                         <p>While you are waiting ever so patiently for my reply, take a look at my <a href="https://www.instagram.com/toro4art/" target="_blank">Instagram page</a> to see more examples I have done for others in the past. I plan to share some fun highlights of my teaching very soon!</p>
                    </div>
                    </>
                }
                {this.state.hasError &&
                    <>
                    <h1>Whoops!</h1>
                    <div id="contact-content">
                        <p>I am sorry. There was an error trying to send your message. My web developer has been notified of the issue and this will be fixed soon.</p>
                    </div>
                    </>
                }
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
