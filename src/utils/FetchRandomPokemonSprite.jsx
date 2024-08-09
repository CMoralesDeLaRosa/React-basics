const FetchRandomPokemonSprite = async () => {
  try {
    const randomId = Math.floor(Math.random() * 898) + 1
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)

    if (!res.ok) {
      throw new Error(`Error fetching Pokémon with ID ${randomId}`)
    }

    const data = await res.json()
    return data.sprites.front_default
  } catch (error) {
    console.error('Failed to fetch Pokémon sprite:', error)
    return null
  }
}

export default FetchRandomPokemonSprite
