import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { connect } from "react-redux";
import lexiToroImage from "./img/Alexis-Toro-Art-Instruction.jpg";
import studentSample1 from "./img/student-sample-1.jpg";
import studentSample2 from "./img/student-sample-2.jpg";
import student1 from "./img/alexis-toro-art-instruction-students1.jpg";
import student2 from "./img/alexis-toro-art-instruction-students2.jpg";

class Instruction extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header additionalClass='main-header' />
        <h1>Private Art Instruction</h1>
        <div class='instruction-content'>
          <div id='overflow'>
            <span className='left instruction'>
              <img
                id='instructor-photo'
                src={lexiToroImage}
                alt='Alexis Toro, private art instructor'
              />
            </span>
            <span className='right instruction'>
              <p>
                I am a certified Pre-K-12th grade art teacher in the state of
                Montana and Colorado. I earned my Masters degree in Art
                Education at Florida State University in 2016. My teaching
                career spans over seven years in which I have taught elementary,
                middle, and high school. In 2020 I began privately tutoring
                adults and children. While my focus is primarily painting, I
                tutor in any visual arts form of your choice including drawing,
                oil, acrylic, and watercolor painting, as well as basic book
                binding.
              </p>
            </span>
          </div>
          <div id='overflow'>
            <div className='instruction right'>
              <img
                src={studentSample1}
                alt='Art done by a student of Alexis Toro in graphite'
              />
              <span id='instruction-photo-note'>
                Artwork done by a student of mine. The assignment was to
                transform pencils into an animal of your choice
              </span>
            </div>
            <p className='instruction left'>
              There are many advantages to private art tutoring. Art making has
              therapeutic benefits and promotes mental health and well being.
              Private art tutoring also can improve a portfolio for an art
              school application. Private art tutoring can also be a way to
              create a sentimental and personalized gift for a loved one. I will
              work with you to address your specific needs and create an
              individualized plan to pursue you or your child’s goals as an
              artist.{" "}
            </p>
          </div>
        </div>
        <div className='instruction-content'>
          <img
            src={studentSample2}
            alt='Art done by a student of Alexis Toro. The student drew a bird made of pencils.'
          />
          <span id='instruction-photo-note'>
            Artwork done by a student of mine. The students "relaxed and kicked
            their shoes off" and drew pictures in graphite
          </span>
        </div>
        <div className='instruction-content'>
          <div id='overflow'>
            <span className='left instruction'>
              <img
                src={student1}
                alt='Home school private art instruction by Alexis Toro'
              />
            </span>
            <span className='right instruction'>
              <img
                src={student2}
                alt='Home school private art instruction by Alexis Toro'
              />
            </span>
          </div>
          <span id='instruction-photo-note'>
            Photos from a home school private art instruction class. The girls
            are extremely proud of their work!
          </span>
        </div>
        <hr className='dotted'></hr>
        <p className='instruction-content'>
          Tutoring is done in your home with whatever materials you wish to
          provide. I will provide a preferred shopping list upon request. I am
          located in Frenchtown, but I do travel to Missoula and surrounding
          areas. Please inquire for pricing.{" "}
        </p>
        <Footer />
      </Provider>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps)(Instruction);
