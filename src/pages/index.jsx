import React from "react"
import Layout from "../components/layout"
// import DeviceShowcase from "../components/device-showcase"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import AppleCarousel from "../components/apple-carousel"
import Features from "../components/features"

// import AppleImage from "../images/Apple@2x.png"
// import GoogleImage from "../images/Google@2x.png"
// import SamsungImage from "../images/Samsung@2x.png"
// import MoreImage from "../images/More@2x.png"

import SketchLogo from "../images/logos/logo-sketch.svg"
import FigmaLogo from "../images/logos/logo-figma.svg"
import XDLogo from "../images/logos/logo-adobe-xd.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Device Mockups"/>
    <div className={'max-w-4xl mx-auto mt-12'}>
      <Carousel />
    </div>
    <Features />
    <div className={`max-w-4xl mx-auto text-center mt-12 md:mt-12`}>
      <h2 className={`text-base font-medium text-gray-700`}>Available for</h2>
      <div>
        <img className={`inline-block mx-4`} src={SketchLogo} alt="Sketch" height="36" />
        <img className={`inline-block mx-4`} src={FigmaLogo} alt="Figma" height="36"/>
        <img className={`inline-block mx-4`} src={XDLogo} alt="Adobe XD" height="36"/>
      </div>
    </div>
    <div className={'max-w-4xl mx-4 sm:mx-auto my-12'}>
      <AppleCarousel />
    </div>
    {/* <DeviceShowcase title="Apple" subtitle="iPhone SE · iPhone 11 Pro · iPhone 12 Mini · iPhone 12 | 12 Pro · iPhone 12 Pro Max" image={AppleImage} />
    <DeviceShowcase title="Google" subtitle="Pixel 2 · Pixel 2XL · Pixel 4 · Pixel 4a · Pixel 5" image={GoogleImage}/>
    <DeviceShowcase title="Samsung" subtitle="Galaxy A50 · Galaxy Note20 5G · Galaxy Note20 Ultra · Galaxy S20 5G" image={SamsungImage} />
    <DeviceShowcase title="and more..." subtitle="OnePlus 7T Pro 5G · OnePlus 8 Pro · Sony Xperia 1 II" image={MoreImage} /> */}
    
  </Layout>
)

export default IndexPage
