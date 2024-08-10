import React, { useState } from 'react'
import Description from '../../components/Description/Description'
import Pokeball from '../../components/Pokeball/Pokeball'
import PokemonSprites from '../../components/PokemonSprites/PokemonSprites'
import GetRandomPosition from '../../utils/GetRandomPosition'
import FetchRandomPokemonSprite from '../../utils/FetchRandomPokemonSprite'
import './Home.css'

const spriteWidth = 50
const spriteHeight = 50

const Home = () => {
  const [sprites, setSprites] = useState([])

  const handleClick = async () => {
    const newSprite = await FetchRandomPokemonSprite()
    const newPosition = GetRandomPosition(spriteWidth, spriteHeight)

    setSprites((prevSprites) => [
      ...prevSprites,
      { sprite: newSprite, position: newPosition }
    ])
  }

  return (
    <section className='home flex-container'>
      <article className='article-home flex-container'>
        <div className='logo-home flex-container'>
          <img src='/assets/Pokemon-logo.png' alt='Pokemon logo' />
        </div>
        <Description
          text='Know all the Pokémon, their characteristics, and their most hidden moves so you can catch them all!'
          className='main-description'
          Width={'700px'}
        />
        <Pokeball onClick={handleClick} />
      </article>
      <PokemonSprites sprites={sprites} />
    </section>
  )
}

export default Home
