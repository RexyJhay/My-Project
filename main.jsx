import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todoapp from './Todoapp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todoapp />
  </StrictMode>,
)
