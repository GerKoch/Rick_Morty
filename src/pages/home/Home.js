import imagen from "../../images/rym.jpg";
import styled from "styled-components";

const Home = () => {
    return(
        <div>
            <HomeImg>
                <img src={imagen} />
            </HomeImg>
        </div>
    )
}

export default Home;

const HomeImg = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    @media(max-width: 768px){
        margin: auto;
    }
`