import Head from 'next/head'
import Link from 'next/link'

import styles from '../../styles/Todos.module.css'

export async function getStaticProps() {
  
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")

  const todos = await data.json()

  return {
    props: { todos }
  }

}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>

      <h1>Tarefas para fazer</h1>

      <ul className={styles.todoList}>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
                <p>{todo.title} {' '} 
                  <Link href={`/todos/${todo.id}`}>
                    Ver mais
                  </Link>
                </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}