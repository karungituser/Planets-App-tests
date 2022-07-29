import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planets-container">
      <div className="container">
        <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
        <h1 className="planet-name">{name}</h1>
        <p className="about-planet">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
