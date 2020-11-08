import React, { Component } from "react";
import Slider from "react-slick";

import DesignToolFigma from "../images/media/design-tool-showcase-figma@2x.png"
import DesignToolSketch from "../images/media/design-tool-showcase-sketch@2x.png"
import DesignToolXD from "../images/media/design-tool-showcase-xd@2x.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "19px",
      infinite: true,
      slidesToShow: 1,
      speed: 1000,
      dots: false,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      lazyLoad: true
    };
    return (
      <>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img className={`rounded-md md:rounded-lg`} src={DesignToolFigma} alt=" Figma Design Tool" height="620" />
          </div>
          <div>
            <img className={`rounded-md md:rounded-lg`} src={DesignToolSketch} alt=" Sketch Design Tool" height="620" />
          </div>
          <div>
            <img className={`rounded-md md:rounded-lg`} src={DesignToolXD} alt=" Adobe XD Design Tool" height="620" />
          </div>
        </Slider>
      </>
    );
  }
}