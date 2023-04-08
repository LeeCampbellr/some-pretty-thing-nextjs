import Layout from "@components/layout/layout"
import "@utils/styles.scss"
import Script from "next/script"

import * as snippet from "@segment/snippet"

function MyApp({ Component, pageProps }) {
  function renderSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
      page: true,
    }

    if (process.env.NODE_ENV === "development") {
      return snippet.max(opts)
    }

    return snippet.min(opts)
  }
  return (
    <Layout>
      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
      <Script
        src="https://cdn.usefathom.com/script.js"
        data-site="QYCNUWMB"
        defer
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
