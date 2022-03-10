import { useState, useEffect } from "react";
import CardEpisodes from "../components/CardEpisodes";

const Episodes = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/episode';

    const [episodes, setEpisodes] = useState([]);
    const [episodios, setEpisodios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const { results } = res
                setEpisodes(results);
                setEpisodios(results);
            })
    }, [])

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = episodios.filter((element) => {
           if(element.air_date.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
               return element;
           }
        });
        setEpisodes(resultadoBusqueda);
    }   
    
    return (
        <div className="episodes">
            <div className='containerInput'>
                <input 
                    className="inputBuscar"
                    value={busqueda}
                    placeholder="Buscar por Air Date"
                    onChange={handleChange}
                />
            </div>
            <div className="episodes_center">
                {episodes.length > 0 &&
                    episodes.map(epis =>
                        <CardEpisodes
                            key={epis.id}
                            id={epis.id}
                            name={epis.name}
                            airDate={epis.air_date}
                        />
                    )
                }
            </div>
        </div>
    )


}

export default Episodes;