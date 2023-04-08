import { useEffect } from "react"
import Router from "next/router"

import Navigation from "@components/layout/navigation"
import Newsletter from "@components/layout/newsletter"
import Footer from "@components/layout/footer"

export default function Layout({ children }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url) {
        global.analytics.page("Page navigation", {
          page: url,
        })
      }
    }

    Router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [])
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  )
}
