import React from "react"
import Layout from "../components/layout"
// import DeviceShowcase from "../components/device-showcase"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
// import AppleCarousel from "../components/apple-carousel"
import Features from "../components/features"
import DeviceThumbnail from "../components/device-thumbnail"

// import AppleImage from "../images/Apple@2x.png"
// import GoogleImage from "../images/Google@2x.png"
// import SamsungImage from "../images/Samsung@2x.png"
// import MoreImage from "../images/More@2x.png"

// import SketchLogo from "../images/logos/logo-sketch.svg"
// import FigmaLogo from "../images/logos/logo-figma.svg"
// import XDLogo from "../images/logos/logo-adobe-xd.svg"

import AppleIPhoneSE from "../images/devices/apple/iphone-se.png"
import AppleIPhone11Pro from "../images/devices/apple/iphone-11-pro.png"
import AppleIPhone12Mini from "../images/devices/apple/iphone-12-mini.png"
import AppleIPhone12 from "../images/devices/apple/iphone-12.png"
import AppleIPhone12PM from "../images/devices/apple/iphone-12-pro-max.png"
import AppleIPad from "../images/devices/apple/ipad.png"
import AppleIPadPro from "../images/devices/apple/ipad-pro.png"
import AppleIPadAir from "../images/devices/apple/ipad-air-4.png"
import AppleMacbookPro from "../images/devices/apple/macbook-pro.png"
import AppleMacbookAir from "../images/devices/apple/macbook-air.png"
import AppleProDisplayXDR from "../images/devices/apple/pro-display-xdr.png"

import GooglePixel2 from "../images/devices/google/google-pixel-2.png"
import GooglePixel2XL from "../images/devices/google/google-pixel-2xl.png"
import GooglePixel4 from "../images/devices/google/google-pixel-4.png"
import GooglePixel4a from "../images/devices/google/google-pixel-4a.png"
import GooglePixel5 from "../images/devices/google/google-pixel-5.png"
import GooglePixelSlate from "../images/devices/google/google-pixel-slate.png"
import GooglePixelbookGo from "../images/devices/google/google-pixelbook-go.png"

import SamsungGalaxyA50 from "../images/devices/samsung/samsung-galaxy-a50.png"
import SamsungGalaxyS20 from "../images/devices/samsung/samsung-galaxy-s20.png"
import SamsungGalaxyNote20 from "../images/devices/samsung/samsung-galaxy-note20.png"
import SamsungGalaxyNote20Ultra from "../images/devices/samsung/samsung-galaxy-note20-ultra.png"
import SamsungGalaxyTabS7 from "../images/devices/samsung/samsung-galaxy-tab-s7.png"
import SamsungGalaxyTabA8 from "../images/devices/samsung/samsung-galaxy-tab-a8.png"

import OnePlus7TPro from "../images/devices/oneplus/oneplus-7t-pro.png"
import OnePlus8Pro from "../images/devices/oneplus/oneplus-8-pro.png"
import SonyXperia1ii from "../images/devices/sony/sony-xperia-1-ii.png"

import AmazonFireHD10 from "../images/devices/amazon/amazon-fire-hd-10.png"

import MicrosoftSurfaceProX from "../images/devices/microsoft/microsoft-surface-pro-x.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Device Mockups"/>
    <div className={'max-w-4xl mx-auto pt-12'}>
      <Carousel />
    </div>
    <Features />
    {/* <div className={`max-w-4xl mx-auto text-center mt-12 md:mt-12`}>
      <h2 className={`text-base font-medium text-gray-700`}>Available for</h2>
      <div>
        <img className={`inline-block mx-4`} src={SketchLogo} alt="Sketch" height="36" />
        <img className={`inline-block mx-4`} src={FigmaLogo} alt="Figma" height="36"/>
        <img className={`inline-block mx-4`} src={XDLogo} alt="Adobe XD" height="36"/>
      </div>
    </div> */}
    {/* <div className={'max-w-4xl mx-4 sm:mx-auto my-12'}>
      <h2 className={`text-xxl font-semibold text-center mb-12`}>What's included</h2>
      <AppleCarousel />
    </div> */}
    <div className={`mx-auto py-3 sm:py-5 px-6 lg:px-8 max-w-xl md:max-w-3xl lg:max-w-4xl mt-12`}>
      <h2 className={`text-lg sm:text-xl md:text-xxl font-semibold text-center mb-6 sm:mb-8 md:mb-16 dark:text-white`}>What's included</h2>
      <h3 className={`text-lg font-semibold text-center mb-8 text-gray-500 dark:text-gray-400`}>Mobile Devices</h3>
      <div className={`grid grid-cols-6 gap-2 sm:grid-cols-6 sm:gap-3 lg:grid-cols-7 lg:gap-4 mb-16`}>
        <DeviceThumbnail title="Apple iPhone SE" image={AppleIPhoneSE} />
        <DeviceThumbnail title="Apple iPhone 11 Pro" image={AppleIPhone11Pro} />
        <DeviceThumbnail title="Apple iPhone 12 Mini" image={AppleIPhone12Mini} />
        <DeviceThumbnail title="Apple iPhone 12 | 12 Pro" image={AppleIPhone12} />
        <DeviceThumbnail title="Apple iPhone 12 Pro Max" image={AppleIPhone12PM} />
        <DeviceThumbnail title="Google Pixel 2" image={GooglePixel2} />
        <DeviceThumbnail title="Google Pixel 2 XL" image={GooglePixel2XL} />
        <DeviceThumbnail title="Google Pixel 4" image={GooglePixel4} />
        <DeviceThumbnail title="Google Pixel 4a" image={GooglePixel4a} />
        <DeviceThumbnail title="Google Pixel 5" image={GooglePixel5} />
        <DeviceThumbnail title="Samsung Galaxy A50" image={SamsungGalaxyA50} />
        <DeviceThumbnail title="Samsung Galaxy S20" image={SamsungGalaxyS20} />
        <DeviceThumbnail title="Samsung Galaxy Note20" image={SamsungGalaxyNote20} />
        <DeviceThumbnail title="Samsung Galaxy Note20 Ultra" image={SamsungGalaxyNote20Ultra} />
        <DeviceThumbnail title="Sony Xperia 1 ii" image={SonyXperia1ii} />
        <DeviceThumbnail title="OnePlus 7T Pro" image={OnePlus7TPro} />
        <DeviceThumbnail title="OnePlus 8 Pro" image={OnePlus8Pro} />
      </div>
      <h3 className={`text-lg font-semibold text-center mb-8 text-gray-500 dark:text-gray-400`}>Tablets</h3>
      <div className={`grid grid-cols-4 gap-2 lg:gap-12 mb-16`}>
        <DeviceThumbnail title="Apple iPad" image={AppleIPad} />
        <DeviceThumbnail title="Apple iPad Pro" image={AppleIPadPro} />
        <DeviceThumbnail title="Apple iPad Air 4" image={AppleIPadAir} />
        <DeviceThumbnail title="Google Pixel Slate" image={GooglePixelSlate} />
        <DeviceThumbnail title="Samsung Galaxy Tab S7" image={SamsungGalaxyTabS7} />
        <DeviceThumbnail title="Samsung Galaxy Tab A 8.0" image={SamsungGalaxyTabA8} />
        <DeviceThumbnail title="Amazon Fire HD 10" image={AmazonFireHD10} />
        <DeviceThumbnail title="Microsoft Surface Pro X" image={MicrosoftSurfaceProX} />
      </div>
      <h3 className={`text-lg font-semibold text-center mb-8 text-gray-500 dark:text-gray-400`}>Laptops & Monitors</h3>
      <div className={`grid grid-cols-2 gap-3 lg:gap-12 mb-16`}>
        <DeviceThumbnail title="Apple Macbook Pro" image={AppleMacbookPro} />
        <DeviceThumbnail title="Apple Macbook Air" image={AppleMacbookAir} />
        <DeviceThumbnail title="Google Pixelbook Go" image={GooglePixelbookGo} />
        <DeviceThumbnail title="Apple Pro Display XDR" image={AppleProDisplayXDR} />
      </div>
    </div>
    {/* <DeviceShowcase title="Apple" subtitle="iPhone SE · iPhone 11 Pro · iPhone 12 Mini · iPhone 12 | 12 Pro · iPhone 12 Pro Max" image={AppleImage} />
    <DeviceShowcase title="Google" subtitle="Pixel 2 · Pixel 2XL · Pixel 4 · Pixel 4a · Pixel 5" image={GoogleImage}/>
    <DeviceShowcase title="Samsung" subtitle="Galaxy A50 · Galaxy Note20 5G · Galaxy Note20 Ultra · Galaxy S20 5G" image={SamsungImage} />
    <DeviceShowcase title="and more..." subtitle="OnePlus 7T Pro 5G · OnePlus 8 Pro · Sony Xperia 1 II" image={MoreImage} /> */}
    
  </Layout>
)

export default IndexPage
