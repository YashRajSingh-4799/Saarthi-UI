import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import intro1 from './components/intro1.tsx'
import './index.scss'
import {BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    {/* <intro1 /> */}
    </BrowserRouter>
  </React.StrictMode>,
)
