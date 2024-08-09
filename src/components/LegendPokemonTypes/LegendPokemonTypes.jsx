import './LegendPokemonTypes.css'
import getTypeColor from '../../utils/GetTypeColor-cardPokemon'

const pokemonTypes = [
  'fire',
  'water',
  'grass',
  'electric',
  'bug',
  'psychic',
  'normal'
]

const LegendPokemonTypes = () => {
  return (
    <article className='article-legend-pokemon flex-container'>
      <ul className='pokemon-legend-list flex-container'>
        {pokemonTypes.map((type) => (
          <li key={type} className='legend-item '>
            <div
              className='type-label'
              style={{ backgroundColor: getTypeColor(type) }}
            ></div>
            <p className='type-name'>{type}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default LegendPokemonTypes
