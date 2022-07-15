import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <h1>Página sobre nós</h1>
      <Link href='/'>
        <a>Voltar</a>
      </Link>
    </>
  )
}