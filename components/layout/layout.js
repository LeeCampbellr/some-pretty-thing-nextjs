import Navigation from "@components/layout/navigation"
import Footer from "@components/layout/footer"

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
