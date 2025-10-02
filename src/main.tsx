import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopMenu from './TopMenu.tsx'
import TopBar from './TopBar.tsx'
import { LangProvider } from "./LangContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <LangProvider>
      <TopMenu/>
      <TopBar/>
    </LangProvider>
  </StrictMode>,
)
