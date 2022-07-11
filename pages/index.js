import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="products/"><a>Produtos</a></Link>
        </li>
        <li>
          <Link href="/about"><a>Sobre</a></Link>
        </li>
      </ul>

      <h1>Home</h1>
    </div>
  )
}
