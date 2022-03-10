
const CardCharacters = ({id, name, image, species, status, gender}) => 
    <div className="cardCharacter">
        <p>Character: {name}</p>
        <img alt={name} src={image} />
    </div>

export default CardCharacters;