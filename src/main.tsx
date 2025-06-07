import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConfidentialPortfolio from './App'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfidentialPortfolio />
  </StrictMode>,
)
