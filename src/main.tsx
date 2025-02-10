import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App,{Test} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Test/> */}

  </StrictMode>,
)
