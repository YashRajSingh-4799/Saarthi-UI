import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import intro1 from './components/intro1.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <intro1 /> */}
  </React.StrictMode>,
)
