import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import { Form, Button } from 'react-bootstrap';

class Contact extends React.Component {

    componentDidMount() {
    }

    componentWillMount() {
    }

    getArticleByTitle(title) {
        // return this.props.projects.filter(obj => {
        //     return obj.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-') == title;
        // })[0]
    }

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <div className="contactPage">
                    <h1>Write to Me</h1>
                    <Form>
                        <Form.Group controlId="formBasicContact">
                            <Form.Control type="text" placeholder="Your name" />
                            <Form.Control type="email" placeholder="Your email" />
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                            <Form.Control as="textarea" rows="5" type="text" placeholder="Your message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
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
