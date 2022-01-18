import Layout from "@components/layout/layout"
import { globalCss } from "@stitches/react"
import "@utils/styles.css"

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    textRendering: "optimizeLegibility",
    fontFeatureSettings: "'liga' on",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    scrollBehavior: "smooth",
  },
  ul: {
    padding: 0,
  },
  a: {
    textDecoration: "none",
  },
  "@import": ["https://use.typekit.net/nzu8hkq.css"],
})

;<link rel="stylesheet" href="https://use.typekit.net/nzu8hkq.css"></link>
function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
