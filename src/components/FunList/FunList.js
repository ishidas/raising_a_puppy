import React, { Component } from 'react';
import funlistStyle from './funlistStyle.scss';
import babyOlive from '../../../images/babyolive.jpg';
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

          <li><h2>Bringing home a puppy</h2>
          <img src={babyOlive} /><article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris. Odio pellentesque diam volutpat commodo. Morbi enim nunc faucibus a pellentesque. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Sed nisi lacus sed viverra tellus in hac habitasse. Euismod nisi porta lorem mollis aliquam ut. Semper eget duis at tellus at. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Nisi vitae suscipit tellus mauris a. Bibendum neque egestas congue quisque egestas diam in. Tempor id eu nisl nunc mi ipsum faucibus vitae. Faucibus ornare suspendisse sed nisi lacus. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Varius sit amet mattis vulputate.

Tellus in hac habitasse platea. Urna condimentum mattis pellentesque id nibh tortor. Ornare massa eget egestas purus viverra accumsan in. Dolor sit amet consectetur adipiscing elit. Interdum velit laoreet id donec ultrices tincidunt arcu. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc sed id semper risus in hendrerit gravida rutrum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Amet risus nullam eget felis eget nunc. Integer enim neque volutpat ac. Nunc sed augue lacus viverra vitae congue eu consequat. Lorem dolor sed viverra ipsum. Blandit massa enim nec dui nunc mattis enim ut tellus. Tincidunt eget nullam non nisi est sit amet. Cursus in hac habitasse platea dictumst quisque sagittis purus sit
          </article></li>
          <li><article>here2</article></li>
          <li><article>here3</article></li>
        </ul>
      </div>
    )
  }

}

export default FunList
