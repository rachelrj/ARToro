import React from 'react';
import email from "./img/email.png";
import insta from "./img/instagram.png";
import pop from "./img/pop.jpg";

class Footer extends React.Component {
    render() {
    const POPhtml = <><span id="popl">toro4art proudly supports <a className="tiffany" href="http://popb.org/" target="_blank" rel="noreferrer">Plenty of Pitbulls Organization</a></span><a href="http://popb.org/" target="_blank" rel="noreferrer"><img id="pop" src={pop} alt="Plenty of Pitbulls Organization logo"/></a></>;
        return (
            <div className="footer">
                <div id="footer-top">
                <span id="left">
                    <span>
                        © 2020 by toro4art
                    </span>
                </span>
                    <div id="charity-support-footer-desktop">
                    {POPhtml}
                    </div>
                <span id="right">
                     <span>
                         <a href="mailto:toro4art@gmail.com?subject=Regarding Artwork by Lexi Toro">
                            <img src={email} alt="Email icon to contact Alexis Toro"/>
                         </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/toro4art/" target="_blank" rel="noreferrer">
                            <img src={insta} alt="Instagram icon to follow Alexis Toro"/>
                        </a>
                    </span>
                </span>
                </div>
                <div id="charity-support-footer-mobile">
                    {POPhtml}
                </div>
            </div>
        );
    }
}

export default Footer;