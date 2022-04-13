import { useState, useEffect } from "react";
import CardLocations from "./CardLocations";
import styled from 'styled-components';
import Pagination from "../../components/Pagination";

const Locations = () => {

    const apiUrl = `https://rickandmortyapi.com/api/location`;

    const [locations, setLocations] = useState([]);
    const [locaciones, setLocaciones] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [info, setInfo] = useState({});

    const fetchLocations = (url) => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setLocations(res.results);
            setLocaciones(res.results);
            setInfo(res.info);
            console.log(res);
        })
        .catch(error => console.log(error));
    }
    
    useEffect(() => {
        fetchLocations(apiUrl);
    }, [])

    const onPrevious = () => {
        fetchLocations(info.prev);
    }

    const onNext = () => {
        fetchLocations(info.next);
    }
   
    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        const resultadoBusqueda = locaciones.filter(element => {
            if (element.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return element;
            }
        });
        setLocations(resultadoBusqueda);
    }

    const filterLocations = () => {
        return locations.slice(currentPage, currentPage + 20)
    }

    return (
        <div>
            <BtnInput>
                <input
                    className="inputBuscar"
                    value={busqueda}
                    placeholder="Search for type"
                    onChange={handleChange}
                />
            </BtnInput>
            <Pagination className="pag"
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
            <BgLoc>
                {filterLocations().length > 0 &&
                    filterLocations().map(loc =>
                        <CardLocations
                            key={loc.id}
                            name={loc.name}
                            dimension={loc.dimension}
                            type={loc.type}
                        />)
                }
            </BgLoc>
            <Pagination className="pag"
                prev={info.prev}
                next={info.next}
                onPrevious={onPrevious}
                onNext={onNext}
            />
        </div>
    )
}

export default Locations;

const BgLoc = styled.div`
    background-color: #000;
    column-count: 5;
    @media(max-width: 1200px) {
        column-count: 4;
    }
    @media(max-width: 922px) {
        column-count: 3;
    @media(max-width: 768px) {
        column-count: 2;
    }
    @media(max-width: 600px) {
        column-count: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  }
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

