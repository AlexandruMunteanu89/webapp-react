import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
//import { useState } from 'react'
import Home from './pages/Home'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import About from './pages/About'
import Contact from './pages/Contact'
import CreateMoviePage from './pages/CreateMoviePage'

// import del provide per wrappare l'app per uso del context
import { GlobalProvider } from './contexts/GlobalContext'




function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<HomePage />} />
            <Route path="/movies/create" element={<CreateMoviePage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
