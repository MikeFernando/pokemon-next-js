import Link from 'next/link'

import { Navbar } from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <h1>Página sobre nós</h1>
      <Link href='/'>
        <a>Voltar</a>
      </Link>
    </>
  )
}