import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

// Needed to make the tooltip work
import 'rc-tooltip/assets/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="px-8 fixed w-screen">
        <Navbar />
      </header>

      <main className="bg-gray-100">
        <Component {...pageProps} />
      </main>
    </>
  )
}
