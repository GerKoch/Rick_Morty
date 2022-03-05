
const CardCharacters = ({id, name, image, species, status, gender}) => 
    <div className="cardCharacter">
        <img alt={name} src={image} />
        <ul>
            <h4>Character: {name}</h4>
            <p>Specie: {species}</p>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
        </ul>
    </div>

export default CardCharacters;