import React from 'react';
import email from "./img/email.png";
import insta from "./img/instagram.png";
import pop from "./img/pop.jpg";

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
                <div id="footer-top">
                <span id="left">
                    <span>
                        © 2020 by toro4art
                    </span>
                </span>
                    <div id="charity-support-footer-desktop">
                    <span id="popl">
                        toro4art proudly supports <a href="http://popb.org/" target="_blank">Plenty of Pitbulls Organization</a>
                    </span>
                        <a href="http://popb.org/" target="_blank"><img id="pop" src={pop}/></a>
                    </div>
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
                <div id="charity-support-footer-mobile">
                    <span id="popl">
                        toro4art proudly supports <a href="http://popb.org/" target="_blank">Plenty of Pitbulls Organization</a>
                    </span>
                    <a href="http://popb.org/" target="_blank"><img id="pop" src={pop}/></a>
                </div>
            </div>
        );
    }
}

export default Footer;