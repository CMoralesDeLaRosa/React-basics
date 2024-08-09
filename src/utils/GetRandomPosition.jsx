const GetRandomPosition = (spriteWidth, spriteHeight) => {
  const containerWidth = window.innerWidth
  const containerHeight = window.innerHeight

  const x = Math.random() * (containerWidth - spriteWidth)
  const y = Math.random() * (containerHeight - spriteHeight)

  return { x, y }
}

export default GetRandomPosition
