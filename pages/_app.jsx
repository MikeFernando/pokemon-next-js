import { Footer } from '../components/Footer'
import { MainContainer } from '../components/MainContainer'

import '../global.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
