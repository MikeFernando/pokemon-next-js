import Head from "next/head";
import Link from "next/link";

export default function Product() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <h1>Página de produto</h1>
      <Link href='/'><a>Voltar</a></Link>
    </>
  )
}