import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="w-screen h-screen relative">
    {/* <NavBar /> */}
    <Component {...pageProps} />
  </div>
}
export default MyApp
