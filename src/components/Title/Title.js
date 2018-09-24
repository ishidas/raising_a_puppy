import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import titleStyle from './titleStyle.scss'

export default class Title extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <section className={titleStyle.jumbotron}>
          <h1 className={titleStyle.typewriter}>Raising a Puppy</h1>
        </section>
    );
  }
}
