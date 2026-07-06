import { useState } from 'react'
import HomePage from './pages/HomePage'
import MoviePage from "./pages/MoviePage";

import { BrowserRouter, Routes, Route  } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
