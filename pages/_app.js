import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <Link className="navLink" href="/">
          Home
        </Link>
        <Link className="navLink" href="/events">
          All Events
        </Link>
      </header>
      <Component {...pageProps} />
    </>
  )
}
