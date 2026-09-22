import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Buttons from './components/buttons.jsx'
import Input from './components/Input.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Buttons />
    <Input />
    <Card />
  </StrictMode>,
)
