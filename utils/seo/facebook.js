import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"

const Facebook = ({
  type,
  facebookUsername,
  title,
  description,
  image,
  locale,
  url,
}) => (
  <Head>
    <meta property="og:site_name" content={title} />
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={description} />
  </Head>
)

export default Facebook

Facebook.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Facebook.defaultProps = {
  type: "summary_large_image",
}
