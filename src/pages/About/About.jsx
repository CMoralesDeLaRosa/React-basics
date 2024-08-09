import Description from '../../components/Description/Description'
import TitlePage from '../../components/TitlePage/TitlePage'
import './About.css'

const About = () => {
  return (
    <section className='about'>
      <TitlePage
        title='React basics:'
        description='Description of the project'
      />
      <article className='flex-container'>
        <Description
          text='The Pokémon page is a basic React project. The main goal is to learn how to use the core utilities of this language, such as components, props, states, useEffect, and React Router.

          The website is divided into three sections: Home, Pokémon, and About. Additionally, it is possible to access information about each Pokémon, viewing a different page for each. Each route in the header maintains a different style when its page is active.
          
          In this example, a fetch is made to the PokeAPI, and the data is used in various parts of the website, including different types of data such as text, images, and booleans.
          
          Moreover, the code is organized into separate components and utilities, making it more readable and scalable.'
          className='about-description'
          style={{ Width: '500px', whiteSpace: 'pre-line' }}
        />
      </article>
    </section>
  )
}

export default About
