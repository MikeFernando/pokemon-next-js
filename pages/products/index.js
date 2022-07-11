import Link from "next/link";

import { Navbar } from "../../components/Navbar";

export default function Product() {
  return (
    <>
      <Navbar />
      <h1>Página de produto</h1>
      <Link href='/'><a>Voltar</a></Link>
    </>
  )
}