import './PokemonSprites.css'

const PokemonSprites = ({ sprites }) => {
  return (
    <div className='div-pokemon-sprites'>
      {sprites.map((spriteInfo, index) => (
        <img
          key={index}
          src={spriteInfo.sprite}
          alt='Pokemon sprite'
          style={{
            position: 'absolute',
            top: `${spriteInfo.position.y}px`,
            left: `${spriteInfo.position.x}px`,
            width: '100px',
            height: '100px'
          }}
        />
      ))}
    </div>
  )
}

export default PokemonSprites
