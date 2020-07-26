import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Provider, connect } from 'react-redux';
import store from "./redux/store";
import getComponents from "./redux/reducer";
import DOMPurify from 'dompurify'; 
import STORETYPES from './redux/storeTypes';

class Project extends React.Component {

    componentDidMount() {
    }

    componentWillMount() {
    }

    getBlogNumberParam() {
        const pathname = this.props.location.pathname;
        const pathNames = pathname.split('/');
        return pathNames[pathNames.length-1];
    }

    getArticleByTitle(title) {
        // return this.props.projects.filter(obj => {
        //     return obj.title.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"").split(' ').join('-') == title;
        // })[0]
    }

    render() {
        const projectNumber = this.getBlogNumberParam();

        return (
            <Provider store = {store}>
                <div className="projectPage">
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = state => {
  const components = getComponents(state);
  return {
    projects: components.projects
  }
};
export default connect(mapStateToProps)(Project);
