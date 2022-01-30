import Navigation from "@components/layout/navigation"
import Newsletter from "@components/layout/newsletter"
import Footer from "@components/layout/footer"

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  )
}
