import './TitlePage.css'

const TitlePage = ({ title, description }) => {
  return (
    <article className='title-page'>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

export default TitlePage
