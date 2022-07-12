import Link from 'next/link'

export function Navbar() {
  return (
    <ul>
        <li>
          <Link href="products/"><a>Produtos</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre nós</a></Link>
        </li>
    </ul>
  )
}