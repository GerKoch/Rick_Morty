import { useEffect, useState } from "react";
import Button from "../components/Button";
import CardLocation from '../components/CardLocation';

const Location = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/location';

    const [location, setLocation] = useState([]);
    const [locacion, setlocacion] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [currentPage, setcurrentPage] = useState(0);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const { results } = res;
                setLocation(results);
                setlocacion(results);
            })
    }, [])

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = locacion.filter((element) => {
            if(element.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return element;
            }
        });
        setLocation(resultadoBusqueda);
    }

    const filterLocations = () => {
        return location.slice(currentPage, currentPage + 5)
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
        <div className="locations">
            <div className='containerInput'>
                <input 
                    className="inputBuscar" 
                    value={busqueda} 
                    placeholder="Busqueda por type" 
                    onChange={handleChange} 
                />
            </div>
            <div className="locations_center">
                {filterLocations().length > 0 &&
                    filterLocations().map(loc =>
                        <CardLocation
                            key={loc.id}
                            id={loc.id}
                            name={loc.name}
                            dimension={loc.dimension}
                            type={loc.type}
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

export default Location