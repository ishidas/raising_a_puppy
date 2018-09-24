import React, { Component } from 'react';
import funlistStyle from './funlistStyle.scss';
// import Title from './../Title/Title';

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
        <ul className={funlistStyle.article}>
          <li>here</li>
          <li>here2</li>
          <li>here3</li>
        </ul>
      </div>
    )
  }

}

export default FunList
