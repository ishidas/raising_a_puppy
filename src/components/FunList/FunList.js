import React, { Component } from 'react';
import funlistStyle from './funlistStyle.scss';
// import babyOlive from '../../../images/babyolive.jpg';
import FunArticles from './../FunArticles/FunArticles';

class FunList extends Component {

  componentWillMount() {
    this.funlistSection = React.createRef();
  }

  componentDidMount() {
    this.funlistSection.current.scrollIntoView();
  }

  render() {
    return (
      <div className={funlistStyle.outermostcontainer} ref={this.funlistSection}>
          <FunArticles />
      </div>
    )
  }

}

export default FunList
