import './CardPokemon.css'
import { Link } from 'react-router-dom'
import getTypeColor from '../../utils/GetTypeColor-cardPokemon'

const CardPokemon = ({ pokemonDetails }) => {
  const backgroundColor = getTypeColor(pokemonDetails.types[0].type.name)
  const { base_experience, abilities } = pokemonDetails

  return (
    <Link to={`/pokemon/${pokemonDetails.id}`}>
      <article className='card-pokemon flex-container'>
        <h4>{pokemonDetails.name}</h4>
        <div className='div-img-card-pokemon flex-container'>
          <img
            src={pokemonDetails.sprites.front_shiny}
            alt={pokemonDetails.name}
          />
        </div>
        <div className='div-info-card-pokemon '>
          <div className='pokemon-experience flex-container'>
            <h3>Experience:</h3>
            <p>{base_experience}</p>
          </div>
          <div className='pokemon-abilities flex-container'>
            <h3>Abilities:</h3>
            {abilities.map((abilityInfo, index) => (
              <p key={index}>{abilityInfo.ability.name}</p>
            ))}
          </div>
          <div className='pokemon-type' style={{ backgroundColor }}></div>
        </div>
      </article>
    </Link>
  )
}

export default CardPokemon
