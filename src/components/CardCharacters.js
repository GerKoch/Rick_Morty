

const CardCharacters = ({ id, name, image, species, status, gender }) => {


    return (
        <div className="cardCharacter">
            <img alt={name} src={image} className="post" />
            <footer>
                <p>{name}</p>
            </footer>
        </div>
    )
}


export default CardCharacters;