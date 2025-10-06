import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopMenu from './TopMenu.tsx'
import TopBar from './TopBar.tsx'
import Home from './Home.tsx'
import { LangProvider } from "./LangContext";
import Footer from './Footer.tsx'
import About from './About.tsx'
import Services from './Services.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <LangProvider>
      <TopMenu/>
      <TopBar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </LangProvider>
  </StrictMode>,
)
