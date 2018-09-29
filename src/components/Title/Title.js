import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import titleStyle from './titleStyle.scss';
import babyOlive from '../../../images/babyolive.jpg';
import Admin from '../Admin/Admin.js';


export default class Title extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className={titleStyle.jumbotron}>
          <Link to="/admin" >admin</Link>
          <h1 className={titleStyle.typewriter}>Raising a Puppy</h1>
          <div className={titleStyle.imagecontainer}><img src={babyOlive} width="300px" /></div>
        </section>
    );
  }
}
