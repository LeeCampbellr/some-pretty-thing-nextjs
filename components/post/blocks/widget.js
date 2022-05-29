import React from "react"
import { Helmet } from "react-helmet"

import { Container } from "@components/layout"

const Widget = ({ parts }) => {
  return (
    <React.Fragment>
      <Helmet>
        <script
          async
          src="//widgets.shopstyle.com/shopstyle-widget-snippet.js"
        ></script>
        <script
          async
          defer
          className="curalate-widget-script"
          charset="utf-8"
          src="//d30bopbxapq94k.cloudfront.net/js/curalate-widget-client-all-v3.min.js"
        ></script>
      </Helmet>
      <Container
        mg
        containerMedium
        section
        id={parts.sectionId}
        dangerouslySetInnerHTML={{ __html: parts.embed }}
      ></Container>
    </React.Fragment>
  )
}

export default Widget
