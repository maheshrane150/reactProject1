import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Cat from "./Cat.jsx"
import Hooks from "./hooksProject1.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hooks/>
    
  </StrictMode>,
)
