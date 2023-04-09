import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

// https://react-tooltip.com/docs/getting-started#set-the-default-styling
import 'react-tooltip/dist/react-tooltip.css'

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
