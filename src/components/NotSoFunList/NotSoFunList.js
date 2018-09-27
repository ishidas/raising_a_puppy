import React, { Component } from 'react';
import notsofunlistStyle from './notsofunlistStyle.scss';
import babyOlive from '../../../images/babyolive.jpg'

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
          <li><h2>The Horror of bringing a puppy home</h2>
          <div className={notsofunlistStyle.imageframeright}><img src={babyOlive} /></div><article>Tellus orci ac auctor augue mauris augue neque gravida in. Pulvinar neque laoreet suspendisse interdum consectetur libero. Sagittis id consectetur purus ut faucibus pulvinar elementum. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus pretium quam. Viverra nibh cras pulvinar mattis nunc sed. Elit sed vulputate mi sit amet mauris commodo quis. Ac felis donec et odio. Facilisis mauris sit amet massa vitae tortor condimentum. Quisque id diam vel quam elementum pulvinar etiam non quam. In hac habitasse platea dictumst quisque sagittis. Morbi blandit cursus risus at ultrices mi tempus.
          </article><div className={notsofunlistStyle.dateobject}>{new Date().toString()}</div></li>
          <li><article>here5</article></li>
          <li><article>here6</article></li>
        </ul>
      </div>
    )
  }

}

export default NotSoFunList
