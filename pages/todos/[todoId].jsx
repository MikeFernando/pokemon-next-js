import { useRouter } from 'next/router';
import Link from "next/link";

export default function Todo() {
  const router = useRouter();
  const todoId = router.query.todoId;

  return (
    <>
      <Link href="/">Voltar</Link>

      <h1>Exibindo o todo: {todoId}</h1>
      <p> 
        Lá Lá Lá 
        <Link href={`/todos/${todoId}/comments/1`}>
          <a> Detalhes</a>
        </Link>
      </p>
      <p> 
        Lê Lê Lê 
        <Link href={`/todos/${todoId}/comments/2`}>
          <a> Detalhes</a>
        </Link>
      </p>
      <p> 
        Lu Lu Lu
        <Link href={`/todos/${todoId}/comments/3`}>
          <a> Detalhes</a>
        </Link>
      </p>
    </>
  )
}