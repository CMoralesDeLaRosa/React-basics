import './InfoPokemon.css'
import CardInfoPokemon from '../../components/CardInfoPokemon/CardInfoPokemon'
import TitlePage from '../../components/TitlePage/TitlePage'
import { useParams } from 'react-router-dom'
import { usePokemon } from '../../utils/PokemonProvider'

const InfoPokemon = () => {
  const { id } = useParams()
  const { pokemonById } = usePokemon()
  const pokemon = pokemonById[id]

  if (!pokemon) {
    return (
      <div
        className='info-pokemon'
        style={{
          color: '#ffed75'
        }}
      >
        Loading...
      </div>
    )
  }

  return (
    <section className='info-pokemon'>
      <TitlePage
        title={`${pokemon.name}:`}
        description='Abilities, experience, type & moves'
      />
      <CardInfoPokemon />
    </section>
  )
}

export default InfoPokemon
