import { useState } from 'react'

export interface AppProps {
  num: number
  str: string
}

const App = (props: AppProps) => {
  const { num, str } = props
  const [count, setCount] = useState(num)
  return (
    <>
      <h1>
        Remote {count} {str}
      </h1>
      <button
        onClick={() => {
          setCount((p) => p + 1)
        }}
      >
        +
      </button>
    </>
  )
}

export default App
