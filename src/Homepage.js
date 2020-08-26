import React from 'react';
import Footer from './Footer';
import Header from './Header';
import img from './img/lexi.png';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {connect} from "react-redux";

class Homepage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <h1>Artwork by Lexi Toro</h1>
                <img id="lexi" src={img}/>
                <div id="homepage-content">
                <p>Cupcake ipsum dolor sit amet. Tootsie roll fruitcake pie fruitcake chocolate cake carrot cake ice cream marzipan. Jelly beans cheesecake tart danish bear claw soufflé bear claw pudding chocolate bar. Donut bear claw chupa chups marzipan sugar plum donut.</p>
                <p>Candy lemon drops croissant danish jelly beans. Lollipop soufflé muffin sesame snaps bonbon chocolate bar jelly-o chocolate cake. Liquorice cookie chocolate marzipan. Cookie candy brownie sesame snaps.</p>
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
