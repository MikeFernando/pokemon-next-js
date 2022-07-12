import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export function Navbar() {
  return (
    <ul className={styles.navbar}>
        <li>
          <Link href="products/"><a>Produtos</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre nós</a></Link>
        </li>
    </ul>
  )
}