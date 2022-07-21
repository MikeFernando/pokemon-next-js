import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
  const todo = await response.json()

  return {
    props: { todo }
  }
}

// Faz mapeamento de tudo que tem disponível nessa (URL) pegando todos dados
// Retornar todos IDs como "paths"
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos = await response.json()

  const paths = todos.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }) {
  return (
    <>
      <Link href="/">Voltar</Link>

      <h1>Exibindo o todo: {todo.id}</h1>
      <h3>{todo.title}</h3>
      <p> 
        Lá Lá Lá... 
        <Link href={`/todos/${todo.id}/comments/1`}>
          <a> Detalhes</a>
        </Link>
      </p>
      <p> 
        Lê Lê Lê... 
        <Link href={`/todos/${todo.id}/comments/2`}>
          <a> Detalhes</a>
        </Link>
      </p>
      <p> 
        Lu Lu Lu...
        <Link href={`/todos/${todo.id}/comments/3`}>
          <a> Detalhes</a>
        </Link>
      </p>
    </>
  )
}