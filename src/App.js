import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import doList from './components/DoList';
import getApiUser from './components/GetApiUser';
import TextHolder from './components/TextHolder';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={doList}></Route>
          <Route path="/getApiUser" component={getApiUser}></Route>
          <Route path="/TextHolder" component={TextHolder}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;