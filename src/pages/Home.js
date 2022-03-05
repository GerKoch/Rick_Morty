import imagen from '../images/imagen.jpg';

const Home = () => {
    return(
        <div className="home">
            <h1>vamos boquita</h1>
            <h1>Rick and Morty</h1>
            <img src={imagen} />
        </div>
    )
}

export default Home