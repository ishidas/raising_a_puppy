import React, { Component } from 'react';
import babyOlive from './../../../images/babyolive.jpg';
import carouselStyle from './carouselStyle.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(babyOlive);
  }
  render() {
    return(
      <section className={carouselStyle.sectioncontainer}>
        <div className={carouselStyle.divoverlay}></div>
        <ul className={carouselStyle.container}>
          <li><img src={babyOlive} width="250px"/></li>
          <li><img src={babyOlive} width="250px"/></li>
          <li><img src={babyOlive} width="250px"/></li>
          <li><img src={babyOlive} width="250px"/></li>
          <li><img src={babyOlive} width="250px"/></li>
        </ul>
      </section>
    )
  }
}
