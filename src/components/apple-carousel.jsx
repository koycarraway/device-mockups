import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css" 

import Slide1 from "../images/media/slide-iphones@2x.png"
import Slide2 from "../images/media/slide-iphone-closeup@2x.png"
import Slide3 from "../images/media/slide-ipads@2x.png"
import Slide4 from "../images/media/slide-ipad-closeup@2x.png"
import Slide5 from "../images/media/slide-macbookpro@2x.png"
import Slide6 from "../images/media/slide-macbookpro-closeup@2x.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "0",
      infinite: true,
      slidesToShow: 1,
      speed: 800,
      dots: true,
      arrows: true,
      fade: false,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      useTransform: true,
      lazyLoad: false
    };
    return (
      <>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <img src={Slide1} height="620" />
          <img src={Slide2} height="620" />
          <img src={Slide3} height="620" />
          <img src={Slide4} height="620" />
          <img src={Slide5}  height="620" />
          <img src={Slide6} height="620" />
        </Slider>
      </>
    );
  }
}