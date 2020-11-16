import React, { Component } from "react";
import Slider from "react-slick";

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
      speed: 600,
      dots: true,
      arrows: true,
      fade: false,
      autoplay: false,
      pauseOnHover: false,
      useTransform: true,
      lazyLoad: false
    };
    return (
      <>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <img src={Slide1} alt="Apple Device Mockup" height="620" />
          <img src={Slide2} alt="Apple Device Mockup" height="620" />
          <img src={Slide3} alt="Apple Device Mockup" height="620" />
          <img src={Slide4} alt="Apple Device Mockup" height="620" />
          <img src={Slide5} alt="Apple Device Mockup" height="620" />
          <img src={Slide6} alt="Apple Device Mockup" height="620" />
        </Slider>
        <div className={`mx-auto text-center mt-5`} >
          <h1 className={`mb-2 text-lg font-semibold`} >
            Apple Devices
          </h1>
          <ul className={`device-list mx-auto text-xs sm:text-sm font-normal text-gray-500`} >
            <li>iPhone SE</li>
            <li>iPhone 11 Pro</li>
            <li>iPhone 12 Mini</li>
            <li>iPhone 12 | 12 Pro</li>
            <li>iPhone 12 Pro Max</li>
            <li>iPad</li>
            <li>iPad Air 4</li>
            <li>iPad Pro</li>
            <li>Macbook Pro</li>
          </ul>
        </div>
      </>
    );
  }
}