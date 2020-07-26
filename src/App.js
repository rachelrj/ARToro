import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import UnderConstruction from './UnderConstruction';
import {Provider} from "react-redux";
import store from "./redux/store";

import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    const App = () => (

      <div className="App">
        <Provider store = {store}>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/projects' component={Project}/>
            <Route path='/project/:projectNumber' component={Project}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/under-construction' component={UnderConstruction}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </Provider>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;