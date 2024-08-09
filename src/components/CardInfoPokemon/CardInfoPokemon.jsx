import './CardInfoPokemon.css'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import getTypeColor from '../../utils/GetTypeColor-cardPokemon'
import { usePokemon } from '../../utils/PokemonProvider'

const CardInfoPokemon = () => {
  const { id } = useParams()
  const { pokemonById } = usePokemon()
  const [showFront, setShowFront] = useState(true)
  const pokemon = pokemonById[id]

  if (!pokemon) {
    return <div className='info-pokemon'>Loading...</div>
  }

  const backgroundColor = getTypeColor(pokemon.types[0].type.name)

  const handleImageClick = () => {
    setShowFront(!showFront)
  }

  return (
    <article className='article-info-pokemon-card flex-container'>
      <p className='base-experience'>
        Base experience: {pokemon.base_experience}
      </p>
      <h3>{pokemon.name}</h3>
      <div
        className='div-img-info-pokemon flex-container'
        onClick={handleImageClick}
      >
        <img
          src={
            showFront
              ? pokemon.sprites.front_default
              : pokemon.sprites.back_default
          }
          alt={pokemon.name}
        />
      </div>
      <div className='div-info-pokemon flex-container'>
        <p>{pokemon.description}</p>
        <h3>Abilities:</h3>
        {pokemon.abilities.map((abilityInfo, index) => (
          <p key={index}>{abilityInfo.ability.name}</p>
        ))}
        <h3>Main moves:</h3>
        {pokemon.moves.slice(0, 3).map((moveInfo, index) => (
          <p key={index}>{moveInfo.move.name}</p>
        ))}
      </div>
      <div className='div-type-info-pokemon-card' style={{ backgroundColor }} />
    </article>
  )
}

export default CardInfoPokemon
