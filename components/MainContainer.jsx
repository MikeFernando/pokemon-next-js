import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}