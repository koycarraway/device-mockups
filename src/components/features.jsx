import React from "react"

import IconCollection from "../images/icons/icon-collection.svg"
import IconTwinkle from "../images/icons/icon-twinkle.svg"
import IconVector from "../images/icons/icon-vector.svg"
import IconImage from "../images/icons/icon-image.svg"
import IconExport from "../images/icons/icon-export.svg"
import IconGlobe from "../images/icons/icon-globe.svg"

const Feature = (props) => (
  <div>
    <div className={`flex sm:items-center sm:justify-center text-white sm:mx-auto`}>
      <img className={`inline-block mb-0`} src={`${props.icon}`} alt="Icon" height="32" width="32" />
    </div>
    <div className={`mt-1 sm:mt-3 md:mt-4 sm:text-center`}>
      <h5 className={`text-base md:text-md font-semibold mb-0`}>{props.title}</h5>
      <p className={`mt-1 mb-0 text-sm md:text-base text-gray-600`}>{props.subtitle}</p>
    </div>
  </div>
)

const Features = () => (
  <div className={`mx-auto py-3 sm:py-5 px-6 sm:px-4 md:px-6 lg:px-8 max-w-xl md:max-w-3xl lg:max-w-4xl`}>
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8`}>
      <Feature
        icon={IconCollection}
        title="Growing library"
        subtitle="Includes more than 25 devices and a constantly growing library."
      />
      <Feature
        icon={IconTwinkle}
        title="Lifetime access"
        subtitle="Lifetime access to new devices created in the future."
      />
      <Feature
        icon={IconVector}
        title="Fully editable vectors"
        subtitle="Fully editable and infinitely scalable vectors."
      />
      <Feature
        icon={IconImage}
        title="Smart image fills"
        subtitle="Easily swappable screens with smart image fills."
      />
      <Feature
        icon={IconExport}
        title="Easy exports"
        subtitle="Take a screenshot after a specified delay to capture the perfect moment."
      />
      <Feature
        icon={IconGlobe}
        title="Commercial usage"
        subtitle="Allowed for commercial projects."
      />
    </div>
  </div>
)

export default Features
