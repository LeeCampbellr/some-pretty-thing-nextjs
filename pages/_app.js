import Layout from "@components/layout/layout"
import "@utils/styles.scss"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
