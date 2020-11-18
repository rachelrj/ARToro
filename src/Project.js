import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import STORETYPES from './redux/storeTypes';

class Project extends React.Component {

    componentDidMount() {
    }

    componentWillMount() {
    }

    getArtType() {
        const pathname = this.props.location.pathname;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length-1];
    }

    getArtWorkArray() {
        const artType = this.getArtType();
        return this.props[artType];
    }

    render() {
        const storeArray = this.getArtWorkArray();

        let artPieces = [];
        if (storeArray && storeArray.length) {
            storeArray.forEach((art, index) => {
                console.log(art);
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
                <div className="projectPage">
                    {artPieces}
                </div>
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
