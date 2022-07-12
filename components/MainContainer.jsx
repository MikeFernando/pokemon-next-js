import { Navbar } from './Navbar'

export function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}