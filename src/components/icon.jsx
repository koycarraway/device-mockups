import PropTypes from "prop-types"
import React from "react"

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  }

  if (props.solid === true) {
    return (
      <svg
        style={styles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        clipRule="evenodd"
      >
        <path
          style={styles.path}
          fillRule="evenodd"
          d={props.icon}
        ></path>
      </svg>
    )
  } else {
    return (
      <svg
        style={styles.svg}
        width={`${props.size}px`}
        height={`${props.size}px`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          style={styles.path}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.stroke}
          d={props.icon}
        ></path>
      </svg>
    )
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  stroke: PropTypes.number,
  color: PropTypes.string,
  solid: PropTypes.bool
}

Icon.defaultProps = {
  size: 32,
  stroke: 1.5,
  solid: false
}

export default Icon;
