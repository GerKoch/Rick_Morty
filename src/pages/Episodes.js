import { useState, useEffect } from "react";
import Button from "../components/Button";
import CardEpisodes from "../components/CardEpisodes";

const Episodes = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/episode';

    const [episodes, setEpisodes] = useState([]);
    const [episodios, setEpisodios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setcurrentPage] = useState(0);

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

    const filterEpisodes = () => {
        return episodes.slice(currentPage, currentPage + 5)
    }

    const nextPage = () => {
        if (currentPage < 15)
        setcurrentPage(currentPage + 5)
    }

    const prevPage = () => {
        if (currentPage > 0)
        setcurrentPage(currentPage - 5)
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
                {filterEpisodes().length > 0 &&
                    filterEpisodes().map(epis =>
                        <CardEpisodes
                            key={epis.id}
                            id={epis.id}
                            name={epis.name}
                            airDate={epis.air_date}
                        />
                    )
                }
            </div>
            <div>
                <Button onClick={prevPage}>Prev</Button>
                <Button onClick={nextPage}>Next</Button>
            </div>
        </div>
    )


}

export default Episodes;