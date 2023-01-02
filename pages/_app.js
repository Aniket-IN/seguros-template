import AppLayout from "@/components/layouts/AppLayout"
import ReduxWrapper from "@/components/layouts/ReduxWrapper"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  )
}

export default MyApp
