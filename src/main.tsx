import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"
import "./index.css"

import { Home } from "./components/pages/Home"
import { LearnMore } from "./components/pages/LearnMore"
import { EntityPage } from "./components/pages/EntityPage"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="learnmore" element={<LearnMore />} />
        <Route path="entity/:id" element={<EntityPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
