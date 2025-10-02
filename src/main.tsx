import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopMenu from './TopMenu.tsx'
import TopBar from './TopBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TopMenu />
    <br/>
    <TopBar/>
  </StrictMode>,
)
