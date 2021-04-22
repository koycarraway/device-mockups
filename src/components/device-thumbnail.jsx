import PropTypes from "prop-types"
import React from "react"
import Zoom from 'react-medium-image-zoom'
import { ICONS } from "./constants"
import Icon from "./icon"

const DeviceThumbnail = (props) => (
  <div className={`device-thumbnail flex sm:items-center sm:justify-center text-white p-2`}>
    <Zoom
      overlayBgColorEnd='rgba(0, 0, 0, 0.75)'
      overlayBgColorStart='rgba(0, 0, 0, 0)'
      zoomMargin={240}
    >
      <img src={props.image} alt={props.title} height="240" />
    </Zoom>
    <h5 className={`device-text`}>{props.title}</h5>
  </div>
)

DeviceThumbnail.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string
}

export default DeviceThumbnail