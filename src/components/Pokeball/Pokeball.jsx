import './Pokeball.css'

const Pokeball = ({ onClick }) => {
  return (
    <div
      className='pokeball-home'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <img src='/assets/Pokeball-logo.png' alt='Pokeball logo neón' />
    </div>
  )
}

export default Pokeball
