import React, { useState } from 'react'
import './HeaderHidden.css'
import NavHeader from '../NavHeader/NavHeader'

const HeaderHidden = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <section className='section-img-menu'>
      <article className='article-img-menu'>
        <img
          src='/assets/Menu-icon.png'
          alt='menu'
          onClick={toggleMenu}
        />
      </article>
      <article className={`article-header-hidden ${menuOpen ? 'open' : ''}`}>
        <NavHeader />
      </article>
    </section>
  )
}

export default HeaderHidden
