import React, { createContext, useState, useEffect, useContext } from 'react'
import shuffleArray from './SuffleArray-cardPokemon'

const PokemonContext = createContext()

export const usePokemon = () => useContext(PokemonContext)

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])
  const [pokemonById, setPokemonById] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()
        const pokemonList = data.results

        const pokemonDetails = await Promise.all(
          pokemonList.map(async (pokemonItem) => {
            const res = await fetch(pokemonItem.url)
            const data = await res.json()

            const speciesRes = await fetch(data.species.url)
            const speciesData = await speciesRes.json()
            const descriptionEntry = speciesData.flavor_text_entries.find(
              (entry) => entry.language.name === 'en'
            )
            const description = descriptionEntry
              ? descriptionEntry.flavor_text
              : 'No description available'

            return { ...data, id: data.id.toString(), description }
          })
        )

        const shuffledPokemonDetails = shuffleArray(pokemonDetails)
        setPokemon(shuffledPokemonDetails)

        const pokemonByIdMap = {}
        pokemonDetails.forEach((p) => {
          pokemonByIdMap[p.id] = p
        })
        setPokemonById(pokemonByIdMap)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Pokémon data:', error)
        setError('Failed to fetch Pokémon data')
        setLoading(false)
      }
    }

    fetchPokemonList()
  }, [])

  return (
    <PokemonContext.Provider value={{ pokemon, pokemonById, loading, error }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
