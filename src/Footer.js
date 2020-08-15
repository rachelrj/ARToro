import React from 'react';
import fb from "./img/facebook.png";
import linkedin from "./img/linkedin.png";
import insta from "./img/instagram.png";

class Footer extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        return (
            <div className="footer">
                <span id="left">
                    <span>
                        © 2020 by ARToro
                    </span>
                </span>
                <span id="right">
                     <span>
                        <img src={fb}/>
                    </span>
                    <span>
                        <img src={linkedin}/>
                    </span>
                    <span>
                        <img src={insta}/>
                    </span>
                </span>
            </div>
        );
    }
}

export default Footer;