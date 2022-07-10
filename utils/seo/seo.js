import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Facebook from "@utils/seo/facebook"
import Twitter from "@utils/seo/twitter"

function SEO({ description, title, pathname, image }) {
  const seo = {
    author: `Emily Lewandowski`,
    description: `Welcome to Some Pretty Thing a Greenville, South Carolina life and style blog by Emily Lewandowski.`,
    facebookUsername: "@emilylew",
    image: "src/assets/images/favicon.png",
    lang: `en`,
    siteUrl: `https://someprettything.com`,
    title: `Some Pretty Thing`,
    twitterUsername: "@emilylew",
    url: "https://someprettything.com",
  }

  const metaTitle = title ? `${title} | ${seo.title}` : seo.title
  const metaImage = image ? image : seo.image
  const metaDescription = description ? description : seo.description
  const canonical = pathname ? `${seo.url}/${pathname}` : null

  return (
    <React.Fragment>
      <Helmet>
        <title>{metaTitle}</title>
        <html lang="en" />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={metaImage} />
        {canonical ? <link rel="canonical" href={canonical} /> : null}
      </Helmet>
      <Facebook
        description={metaDescription}
        facebookUsername={seo.facebookUsername}
        image={metaImage}
        locale={seo.lang}
        title={seo.title}
        url={seo.url}
      />
      <Twitter
        description={metaDescription}
        image={metaImage}
        title={seo.title}
        twitterUsername={seo.twitterUsername}
        url={seo.url}
      />
    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}
