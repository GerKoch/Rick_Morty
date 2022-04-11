import styled from 'styled-components';

const CardEpisodes = ({ name, airDate }) => {
    return(
        <div>
            <Card>
                <h4>Episodes</h4>
                <p>Name: {name}</p>
                <p>Air date: {airDate}</p>
            </Card>
        </div>
    )
}
export default CardEpisodes;

const Card =  styled.div`
     display: inline-block;
    border: 5px solid darkgreen;
    border-radius: 50px;
    text-align: center;
    justify-content: center;
    margin: 10px 20px;
    padding: 50px 10px;
    width: 200px;
    height: 200px;
    color: gray;
`