import { useState, useEffect } from 'react';
import CardEpisodes from './CardEpisodes';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';

const Episodes = () => {

    const apiUrl = `https://rickandmortyapi.com/api/episode`;

    const [episodes, setEpisodes] = useState([]);
    const [episodios, setEpisodios] =  useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [info, setInfo] = useState({});

    const fetchEpisodes = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setEpisodes(res.results);
            setEpisodios(res.results);
            setInfo(res.info);
            console.log(res);
        })
        .catch(error => console.log(error));
    }
    useEffect(() => {
      fetchEpisodes(apiUrl);
    }, [])

    const onPrevious = () => {
        fetchEpisodes(info.prev);
    }

    const onNext = () => {
        fetchEpisodes(info.next);
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        const resultadoBusqueda = episodios.filter(element => {
            if(element.air_date.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return element;
            }
    });
    setEpisodes(resultadoBusqueda);
    }
    
    const filterEpisodes = () => {
        return episodes.slice(currentPage, currentPage + 20)
    }

    return(
        <div>
            <BtnInput>
                <input className='inputBuscar'
                    value={busqueda}
                    placeholder="Search for Air Date"
                    onChange={handleChange}
                />
            </BtnInput>
            <Pagination className="pag"
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
            <BgEpis>
                {filterEpisodes().length > 0 &&
                    filterEpisodes().map(epis => 
                        <CardEpisodes 
                            key={epis.id}
                            name={epis.name}
                            airDate={epis.air_date}
                        />)
                }
            </BgEpis>
            <Pagination className="pag"
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        </div>    
    )
}

export default Episodes;

const BgEpis = styled.div`
  background-color: #000;
  column-count: 5;
`

const BtnInput = styled.div`
    background-color: #010;
    display: flex;
    justify-content: right;
    .inputBuscar{
        outline: none;
        border: solid 2px green;
        padding: 10px 10px;
        border-radius: 50px;
        width: 500px;
        background-color: #eee;
    }
`

const BtnPag = styled.div`
    display: flex;
    flex-direction: row;
`
