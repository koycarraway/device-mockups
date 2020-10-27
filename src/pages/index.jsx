import React from "react"
import Layout from "../components/layout"
import DeviceShowcase from "../components/device-showcase"
import SEO from "../components/SEO"

import AppleImage from "../images/Apple@2x.png"
import GoogleImage from "../images/Google@2x.png"
import SamsungImage from "../images/Samsung@2x.png"
import MoreImage from "../images/More@2x.png"

const IndexPage = () => (
  <Layout>
    <SEO />
    <DeviceShowcase title="Apple" subtitle="iPhone SE · iPhone 11 Pro · iPhone 12 Mini · iPhone 12 | 12 Pro · iPhone 12 Pro Max" image={AppleImage} />
    <DeviceShowcase title="Google" subtitle="Pixel 2 · Pixel 2XL · Pixel 4 · Pixel 4a · Pixel 5" image={GoogleImage}/>
    <DeviceShowcase title="Samsung" subtitle="Galaxy A50 · Galaxy Note20 5G · Galaxy Note20 Ultra · Galaxy S20 5G" image={SamsungImage} />
    <DeviceShowcase title="and more..." subtitle="OnePlus 7T Pro 5G · OnePlus 8 Pro · Sony Xperia 1 II" image={MoreImage} />
  </Layout>
)

export default IndexPage
