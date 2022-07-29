import Layout from "@components/layout/layout"
import "@utils/styles.scss"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
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
