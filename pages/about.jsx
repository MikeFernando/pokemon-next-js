import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1>Página sobre nós</h1>
      <Link href='/'>
        <a>Voltar</a>
      </Link>
    </>
  )
}