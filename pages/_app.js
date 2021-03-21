import '../styles/globals.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    // AOS.init();
    // window.addEventListener('touchmove', () => {
    //   AOS.refresh()
    // }, false)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
