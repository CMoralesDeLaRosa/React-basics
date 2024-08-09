import './Pokemon.css'
import CardPokemon from '../../components/CardPokemon/CardPokemon'
import { usePokemon } from '../../utils/PokemonProvider'
import LegendPokemonTypes from '../../components/LegendPokemonTypes/LegendPokemonTypes'
import TitlePage from '../../components/TitlePage/TitlePage'

const Pokemon = () => {
  const { pokemon } = usePokemon()

  if (!pokemon || pokemon.length === 0) {
    return (
      <div
        className='pokemon'
        style={{
          color: '#ffed75'
        }}
      >
        Loading...
      </div>
    )
  }

  return (
    <section className='pokemon '>
      <TitlePage title='Pokémon:' description='Type and abilities' />
      <LegendPokemonTypes />
      <article className='article-pokemon-cards flex-container'>
        {pokemon.map((pokemonDetails) => (
          <CardPokemon
            key={pokemonDetails.id}
            pokemonDetails={pokemonDetails}
          />
        ))}
      </article>
    </section>
  )
}

export default Pokemon
