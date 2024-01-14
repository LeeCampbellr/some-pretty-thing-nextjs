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

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6005519171901571"
        crossOrigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
