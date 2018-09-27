import React , { Component }from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.js';
import Title from './components/Title/Title.js';
import FunList from './components/FunList/FunList.js';
import NotSoFunList from './components/NotSoFunList/NotSoFunList.js';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Title />
            <Navigation />
            <Switch>
              <Route component={FunList} path="/fun"/>
              <Route component={NotSoFunList} path="/notsofun"/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app'));