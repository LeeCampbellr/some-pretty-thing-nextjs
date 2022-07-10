import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Twitter = ({ type, twitterUsername, title, description, image }) => (
  <Helmet>
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={description} />
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: "summary_large_image",
}
