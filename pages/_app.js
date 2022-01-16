import Layout from "components/layout"
import { globalCss } from "@stitches/react"

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
  "@import": ["/font.css", "https://use.typekit.net/nzu8hkq.css"],
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
