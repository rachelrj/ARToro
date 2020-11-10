import React from 'react';
import Footer from './Footer';
import Header from './Header';

class UnderConstruction extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <Header additionalClass="headerUnderConstruction"/>             
                <h1>Under Construction</h1>
                <div className="bodyHolder">
                    <div className="construction">
                    <br/>
                    <br/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UnderConstruction;
