import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import '../styles/exercice-01.css'
import '../styles/exercice-02.css'
import '../styles/exercice-03.css'
import '../styles/exercice-04.css'
import '../styles/exercice-06.css'
import '../styles/exercice-07.css'
import '../styles/exercice-08.css'
import '../styles/exercice-09.css'
import '../styles/exercice-10.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
