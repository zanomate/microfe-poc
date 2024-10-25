import './App.css'
import { lazy, Suspense } from 'react'

const Remote = lazy(() => import('app_remote/App'))

const App = () => {
  return (
    <div className="content">
      <h1>Container</h1>
      <div style={{ border: '5px solid red' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Remote num={1234} />
        </Suspense>
      </div>
    </div>
  )
}

export default App
