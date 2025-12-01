import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"

import { Home } from "./components/pages/home"
import { LearnMore } from "./components/pages/LearnMore"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="learnmore" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
