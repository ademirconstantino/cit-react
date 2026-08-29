import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { LangProvider } from './LangContext';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter basename="/cit-react">
        <App />
      </BrowserRouter>
    </LangProvider>
  </StrictMode>
);