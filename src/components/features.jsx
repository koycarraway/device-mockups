import React from "react"
import Icon from "./icon"
import {ICONS} from "./constants"

const Feature = (props) => (
  <div>
    <div className={`flex sm:items-center sm:justify-center dark:text-white sm:mx-auto`}>
      {props.icon}
    </div>
    <div className={`mt-1 sm:mt-3 md:mt-4 sm:text-center dark:text-white`}>
      <h5 className={`text-base md:text-md font-semibold mb-0`}>{props.title}</h5>
      <p className={`mt-1 mb-0 text-sm md:text-base text-gray-500 dark:text-gray-500`}>{props.subtitle}</p>
    </div>
  </div>
)

const Features = () => (
  <div className={`mx-auto py-3 sm:py-5 px-6 sm:px-4 md:px-6 lg:px-8 max-w-xl md:max-w-3xl lg:max-w-4xl`}>
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8`}>
      <Feature
        icon={<Icon icon={ICONS.COLLECTION} />}
        title="Growing library"
        subtitle="Includes a growing library of 30+ mobile devices, tablets and laptops."
      />
      <Feature
        icon={<Icon icon={ICONS.SPARKLES} />}
        title="Lifetime access"
        subtitle="Lifetime access to new devices created in the future."
      />
      <Feature
        icon={<Icon icon={ICONS.VECTOR} />}
        title="Fully editable vectors"
        subtitle="Fully editable and infinitely scalable vectors."
      />
      <Feature
        icon={<Icon icon={ICONS.IMAGE} />}
        title="Smart image fills"
        subtitle="Easily swappable screens with smart image fills."
      />
      <Feature
        icon={<Icon icon={ICONS.EXPORT} />}
        title="Easy exports"
        subtitle="Take a screenshot after a specified delay to capture the perfect moment."
      />
      <Feature
        icon={<Icon icon={ICONS.GLOBE} />}
        title="Commercial usage"
        subtitle="Allowed for commercial projects."
      />
    </div>
  </div>
)

export default Features
