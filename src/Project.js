import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";

class Project extends React.Component {

    getArtType() {
        const pathname = this.props.location.pathname;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length-1];
    }

    titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        return str.join(' ');
    }

    getArtWorkArray() {
        const artType = this.getArtType();
        console.log(this.props[artType])
        console.log(artType);
        return this.props[artType];
    }

    render() {
        const storeArray = this.getArtWorkArray();
        const artTitle = this.titleCase(this.getArtType());

        let artPieces = [];
        if (storeArray && storeArray.length) {
            storeArray.forEach((art, index) => {
                artPieces.push(
                    <span key={art.id} className="artSample">
                    <img className="artPiece" src={art.img}/>
                    <span className="overlay">
                        <div className="text">{art.title}</div>
                        <div className="text">{art.size}</div>
                        <div className="text">{art.status}</div>
                    </span>
                </span>
                )
            });
        }

        return (
            <Provider store = {store}>
                <Header additionalClass="main-header"/>
                <h1>{artTitle}</h1>
                <div className="projectPage">
                    {artPieces}
                </div>
                <p id="checkout-instagram">Check out more art at <a className="tiffany" href="https://www.instagram.com/toro4art/" target="_blank" rel="noreferrer">@Toro4art on Instagram</a></p>
                <Footer/>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
  const components = getComponents(state);
  return {
    oil: components.OIL,
    watercolor: components.WATERCOLOR,
    miscellaneous: components.MISCELLANEOUS
  }
};
export default connect(mapStateToProps)(Project);
