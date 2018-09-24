import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import navigationStyle from './navigationStyle.scss';
import SmileIcon from './../../assets/svg/smile-regular.svg';
import FrownIcon from './../../assets/svg/frown-regular.svg';


export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className={navigationStyle.facecontainer}>
          <Link to="/fun" style={{textDecoration: 'none', color: 'white'}} className={navigationStyle.linkStyle}>
            <div className={navigationStyle.iconbutton} >
              <h3>Fun</h3>
              <SmileIcon width={80} height={80}/>
            </div>
          </Link>

          <div><h3>&</h3></div>

          <Link to="/notsofun" style={{textDecoration: 'none', color: 'white'}}>
            <div className={navigationStyle.iconbutton}>
              <h3>Not so Fun</h3>
              <FrownIcon width={80} height={80}/>
            </div>
          </Link>
        </div>
    )
  }
}
