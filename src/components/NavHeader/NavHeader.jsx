import './NavHeader.css'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <nav>
      <ul className='flex-container'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `link-home ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pokemon'
            className={({ isActive }) =>
              `link-pokemon ${isActive ? 'active' : ''}`
            }
          >
            Pokémon
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `link-about ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavHeader
