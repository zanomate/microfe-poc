import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App num={0} str="ciao" />
    </React.StrictMode>,
  )
}
