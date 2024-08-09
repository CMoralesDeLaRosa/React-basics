import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Pokemon from './pages/Pokemon/Pokemon'
import PokemonProvider from './utils/PokemonProvider'
import InfoPokemon from './pages/InfoPokemon/InfoPokemon'
import HeaderHidden from './components/HeaderHidden/HeaderHidden'

const App = () => {
  return (
    <PokemonProvider>
      <Header />
      <HeaderHidden />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pokemon' element={<Pokemon />}></Route>
        <Route path='/pokemon/:id' element={<InfoPokemon />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </PokemonProvider>
  )
}

export default App
