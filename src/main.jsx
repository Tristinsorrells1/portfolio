import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router"
import Home from "./Home"
import Header from "./Header"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </React.StrictMode>
  </BrowserRouter>
)