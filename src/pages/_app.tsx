import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="px-8 fixed w-screen">
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  )
}
