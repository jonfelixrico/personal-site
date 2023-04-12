import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

// Needed to make the tooltip work
import 'rc-tooltip/assets/bootstrap.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="text-app bg-app">
        <Component {...pageProps} />
      </div>
    </>
  )
}
