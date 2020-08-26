import React from 'react';
import email from "./img/email.png";
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
                        © 2020 by toro4art
                    </span>
                </span>
                <span id="right">
                     <span>
                         <a href="mailto:toro4art@gmail.com?subject=Regarding Artwork by Lexi Toro">
                            <img src={email}/>
                         </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/toro4art/" target="_blank">
                            <img src={insta}/>
                        </a>
                    </span>
                </span>
            </div>
        );
    }
}

export default Footer;