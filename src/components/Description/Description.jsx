import './Description.css'

const Description = ({ text, className = '', Width }) => {
  return (
    <p className={className} style={{ Width, whiteSpace: 'pre-line' }}>
      {text}
    </p>
  )
}

export default Description
