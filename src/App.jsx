import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
//import { useState } from 'react'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import About from './pages/About'
import Contact from './pages/Contact'






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
