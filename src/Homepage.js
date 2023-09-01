import React from 'react';
import Footer from './Footer';
import Header from './Header';
import img from './img/Alexis-Toro-Artist-Horse-Montana.JPG';
import img2 from './img/Alexis-Toro-Artist-Horse-Montana-2.JPG';
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
                <div id="homepage-content">
                
                <p>Howdy!</p>

                <p>I’m Alexis and I am a Montana based artist. I was born and raised in Gainesville, Florida. I studied painting at Florida State University from 2011-2015, receiving a BA in Studio Arts. I received my Masters Degree in Art Education from FSU in 2016.</p> 
                <p>After 7 years of teaching Pre-K - 12th grade Art in New York, Colorado, and Montana I have retired from the the classroom to peruse motherhood and painting full time.</p>
                <p>I live with my husband, Matt, our beloved dog Iggy, and our trusty steeds Laredo and Teeler in Frenchtown, Montana. We are thrilled to be welcoming our first baby in the Fall of 2023!</p>
                <p>The inspiration for my pet portraits comes from my own pet. I rescued my best friend, Iggy, from Plenty of Pitbulls in Gainesville, Florida in 2017. We are inseparable. A percentage from each pet portrait will be donated to POPB. </p>
                <p>My fascination with horses began at an early age but I began painting horses as a way to cope with a severe horseback riding accident in 2021. I consider myself very lucky to have survived and be able to paint to this day. </p>
                <p>Additionally, I love to paint watercolor scenes, typically plein air, whenever my husband and I are out and about on an adventure.</p>
                <p>Please reach out via my contact page or DM to inquire about buying originals, setting up private art lessons, or commissioning an original painting for yourself or a loved one. </p>
                <img class="lexi" id="long-lexi" src={img2}/>
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
