import { ReactElement } from "react"
import { useRouter } from "next/router"
import Link, { LinkProps } from "next/link"

export function ActiveLink({ children, activeClassName }) {
  const { asPath } = useRouter()

  return <Link>{children}</Link>
}
