import React from 'react';
import Footer from './Footer';
import Header from './Header';
import img from './img/lexi-outdoors.jpg';
import img2 from './img/lexi-outdoors2.jpg';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {connect} from "react-redux";

class Homepage extends React.Component {

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <h1>Artwork by Alexis R. Toro</h1>
                <img class="lexi" src={img}/>
                <img class="lexi" src={img2}/>
                <div id="homepage-content">
                <p>Hello and thank you for visiting my website!</p>
                <p>My name is Alexis Toro and I love creating and teaching art. I am an Art Teacher at a local high school in Boulder, Colorado. Born and raised in Gainesville, Florida, I moved to the mountains a few years ago following my passion for the outdoors. I enjoy plein air painting the beautiful scenery while my boyfriend, Matt,  goes fly fishing in alpine lakes. Most of my watercolor paintings are plein air which means they were painted from life. Additionally, the water I use is scooped from whichever lake or river I am painting that day. When I am not outside creating watercolor works of art, I enjoy painting animals and other subjects in oil. My inspiration comes from my love of animals. I rescued my best friend Iggy from Plenty of Pitbulls in Gainesville, Florida in 2017. We are inseparable. I enjoy donating works of art to Plenty of Pitbulls whenever I can. I also love riding horses at Wildsong Ranch in Longmont, Colorado in my free time.</p>
                </div>
                <Footer/>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
  return {
  }
};
export default connect(mapStateToProps)(Homepage);
