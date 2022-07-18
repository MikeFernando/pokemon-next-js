import Head from 'next/head'

import styles from '../styles/Tasks.module.css'

export async function getStaticProps() {
  
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")

  const todos = await data.json()

  return {
    props: { todos }
  }

}

export default function Tasks({ todos }) {
  return (
    <>
      <Head>
        <title>Tasks</title>
      </Head>

      <h1>Tarefas para fazer</h1>

      <ul className={styles.todoList}>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}