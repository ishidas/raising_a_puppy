import React, { Component } from 'react';
import notsofunlistStyle from './notsofunlistStyle.scss';

class NotSoFunList extends Component {

  constructor(props) {
    super(props)
    this.notsofunlistSection = React.createRef();
  }

  componentDidMount() {
    this.notsofunlistSection.current.scrollIntoView();
  }

  render() {
    return (
      <div className={notsofunlistStyle.outermostcontainer} ref={this.notsofunlistSection}>
        <ul className={notsofunlistStyle.article}>
          <li>here4</li>
          <li>here5</li>
          <li>her63</li>
        </ul>
      </div>
    )
  }

}

export default NotSoFunList
