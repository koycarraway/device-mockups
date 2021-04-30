import React, { Component } from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"

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
          <StaticImage
            src={"../images/media/design-tool-showcase-figma@2x.png"}
            alt="Figma Design Tool"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            height={764}
            imgClassName={`rounded-md md:rounded-lg`}
          />
          <StaticImage
            src="../images/media/design-tool-showcase-sketch@2x.png"
            alt="Sketch Design Tool"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            height={764}
            imgClassName={`rounded-md md:rounded-lg`}
          />
          <StaticImage
            src="../images/media/design-tool-showcase-xd@2x.png"
            alt="Adobe XD Design Tool"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            height={764}
            imgClassName={`rounded-md md:rounded-lg`}
          />
        </Slider>
      </>
    );
  }
}