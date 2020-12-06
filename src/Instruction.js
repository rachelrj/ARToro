import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {connect} from "react-redux";
import lexiToroImage from './img/alexis-toro-private-art-instruction.jpg';
import studentSample1 from './img/student-sample-1.jpg';
import studentSample2 from './img/student-sample-2.jpg';
import student1 from './img/alexis-toro-art-instruction-students1.jpg';
import student2 from './img/alexis-toro-art-instruction-students2.jpg';

class Instruction extends React.Component {

    render() {
        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <h1>Private Art Instruction</h1>
                <div id="instruction-content">
                    <div id="overflow">
                        <span className="left instruction">
                            <img src={lexiToroImage} alt="Alexis Toro, private art instructor"/>
                        </span>
                        <span className="right instruction">
                            <p>I am a certified art teacher in Kindergarten through 12th grade. I earned my masters degree in Art Education at Florida State University in 2016. My teaching career spans over five years in which I have taught elementary, middle and high school. In 2020 I began privately tutoring adults and children.  While my focus is primarily painting, I tutor in any visual arts form of your choice including drawing,painting, ceramics, etc.</p>
                        </span>
                    </div>
                    <div id="overflow">
                    <div className="instruction right">
                        <img src={studentSample1} alt="Art done by a student of Alexis Toro in graphite"/>
                        <span id="instruction-photo-note">Artwork done by a student of mine. The students "relaxed and kicked their shoes off" and drew pictures in graphite</span>
                    </div>
                        <p className="instruction left">There are many advantages to private art tutoring. Art making has therapeutic benefits and promotes mental health and well being. Private art tutoring also can improve a portfolio for an art school application. Private art tutoring can also be a way to create a sentimental and personalized gift for a loved one.  I  will work with you to address your specific needs and create an individualized plan to pursue you or your child’s goals as an artist. </p>
                    </div>
                </div>
                <div id="instruction-content">
                    <img src={studentSample2} alt="Art done by a student of Alexis Toro. The student drew a bird made of pencils."/>
                    <span id="instruction-photo-note">Artwork done by a student of mine. The assignment was to transform pencils into an animal of your choice</span>
                </div>
                <div id="instruction-content">
                    <div id="overflow">
                        <span className="left instruction">
                            <img src={student1} alt="Home school private art instruction by Alexis Toro"/>
                        </span>
                        <span className="right instruction">
                            <img src={student2} alt="Home school private art instruction by Alexis Toro"/>
                        </span>
                    </div>
                    <span id="instruction-photo-note">Photos from a home school private art instruction class. The girls are extremely proud of their work!</span>
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