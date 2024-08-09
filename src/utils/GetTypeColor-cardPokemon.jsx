const getTypeColor = (type) => {
  const typeColors = {
    fire: '#f3503f',
    water: '#007664',
    grass: '#79977a',
    electric: '#F8D030',
    bug: '#cba437',
    psychic: '#737EB4',
    normal: '#5a5b62'
  }
  return typeColors[type] || '#A8A878'
}

export default getTypeColor
