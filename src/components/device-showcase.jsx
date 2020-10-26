import PropTypes from "prop-types"
import React from "react"

const DeviceShowcase = (props) => (
  <div className={`text-center py-2 sm:py-4 md:py-8`} >
    {/* <Image /> */}
    <img src={props.image} alt="Device Showcase" className={`m-auto`} width="820px" />
    {/* <Img /> */}
    <div className={`-mt-16 sm:-mt-20 md:-mt-24 mx-4`} >
      <h1 className={`mb-2 sm:mb-4 text-lg sm:text-xl md:text-xxl font-semibold`} >
        {props.title}
      </h1>
      <p className={`mx-auto text-xs sm:text-base font-normal text-gray-500`} >
        {props.subtitle}
      </p>
    </div>
  </div>
)

DeviceShowcase.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string
}

DeviceShowcase.defaultProps = {
  title: `Title`,
  subtitle: `Subtitle`,
}

export default DeviceShowcase
