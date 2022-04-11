import styled from "styled-components";

const CardCharacters = ({ id, name, image, species, status, gender }) => {
    return (
        <div>
            <Card>
                <p>{name}</p>
                <img src={image} />
                <div>
                    <p>Specie: {species}</p>
                    <p>Status: {status}</p>
                    <p>Gender: {gender}</p>
                </div>
                
            </Card>
        </div>
    )
}

export default CardCharacters;

const Card = styled.div`
  display: inline-block;
  border: 5px solid darkgreen;
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  margin: 10px 10px;
  margin: 5px;
  width: 90%;
  height: 90%;
  cursor: pointer;
  overflow: hidden;
  color: gray;
`
