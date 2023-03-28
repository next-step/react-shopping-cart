import { useEffect, useState } from 'react'

const Test = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
        setLoading(false)
      })
  }, [])

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setLoading(true)
    fetch('todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: todo,
    }).then((res) => {
      fetch('/todos')
        // eslint-disable-next-line @typescript-eslint/no-shadow
        .then((res: any) => res.json())
        .then((data) => {
          setTodo('')
          setTodos(data)
          setLoading(false)
        })
    })
  }

  return (
    <div>
      <h2>할일 목록</h2>

      <ul>
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          placeholder='새로운 할일'
          disabled={loading}
          value={todo}
          onChange={({ target: { value } }) => setTodo(value)}
        />
        <button type='button' disabled={!todo}>
          추가
        </button>
      </form>
    </div>
  )
}

export default Test
