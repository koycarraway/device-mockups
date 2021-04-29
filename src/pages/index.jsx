import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Features from "../components/features"
import DeviceThumbnail from "../components/device-thumbnail"

import AppleIPhoneSE from "../images/devices/apple/apple-iphone-se.png"
import AppleIPhone11Pro from "../images/devices/apple/apple-iphone-11-pro.png"
import AppleIPhone12Mini from "../images/devices/apple/apple-iphone-12-mini.png"
import AppleIPhone12 from "../images/devices/apple/apple-iphone-12.png"
import AppleIPhone12PM from "../images/devices/apple/apple-iphone-12-pro-max.png"
import AppleIPad from "../images/devices/apple/apple-ipad.png"
import AppleIPadPro from "../images/devices/apple/apple-ipad-pro.png"
import AppleIPadAir from "../images/devices/apple/apple-ipad-air-4.png"
import AppleMacbookPro from "../images/devices/apple/macbook-pro.png"
import AppleMacbookAir from "../images/devices/apple/macbook-air.png"
import AppleProDisplayXDR from "../images/devices/apple/pro-display-xdr.png"
import AppleIMac24 from "../images/devices/apple/imac-24.webp"

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
    <div className={'max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto pt-8'}>
      <Carousel />
    </div>
    <Features />
    <div className={`mx-auto py-3 sm:py-5 px-6 lg:px-8 max-w-xl md:max-w-3xl lg:max-w-5xl mt-12`}>
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
        <DeviceThumbnail title="Apple iMac 24in" image={AppleIMac24} />
      </div>
    </div>
  </Layout>
)

export default IndexPage
