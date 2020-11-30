import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {connect} from "react-redux";
import img from './img/lexi3.jpg';
import img3 from './img/student-sample-1.jpg';
import img4 from './img/student-sample-2.jpg';

class Instruction extends React.Component {

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <h1>Private Art Instruction</h1>
                <div id="instruction-content">
                    <div id="overflow">
                        <span id="left" class="instruction">
                            <img src={img} alt="Alexis Toro, private art instructor"/>
                        </span>
                        <p id="right" class="instruction">I am a certified art teacher in Kindergarten through 12th grade. I earned my masters degree in Art Education at Florida State University in 2016. My teaching career spans over five years in which I have taught elementary, middle and high school. In 2020 I began privately tutoring adults and children.  While my focus is primarily painting, I tutor in any visual arts form of your choice including drawing,painting, ceramics, etc.</p>
                    </div>
                    <div id="overflow">
                    <div class="instruction" id="right">
                        <img src={img4} alt="Art done by a student of Alexis Toro in graphite"/>
                        <span id="instruction-photo-note">Artwork done by a student of mine. The students "relaxed and kicked their shoes off" and drew pictures in graphite</span>
                    </div>
                        <p class="instruction" id="left">There are many advantages to private art tutoring. Art making has therapeutic benefits and promotes mental health and well being. Private art tutoring also can improve a portfolio for an art school application. Private art tutoring can also be a way to create a sentimental and personalized gift for a loved one.  I  will work with you to address your specific needs and create an individualized plan to pursue you or your child’s goals as an artist. </p>
                    </div>
                </div>
                    <div id="instruction-content">
                        <img src={img3} alt="Art done by a student of Alexis Toro. The student drew a bird made of pencils."/>
                        <span id="instruction-photo-note">Artwork done by a student of mine. The assignment was to transform pencils into an animal of your choice</span>
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
export default connect(mapStateToProps)(Instruction);