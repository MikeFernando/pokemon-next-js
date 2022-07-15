import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Encontre seu melhor pokemon" />
        <title>Home | Pokemom</title>
      </Head>
      <h1 className={styles.title}>
        Hello NextJS
      </h1>

      <Image 
        src='/images/city.jpg'
        width='300px'
        height='400px'
        alt='Uma cidade'
      />
    </>
  )
}
