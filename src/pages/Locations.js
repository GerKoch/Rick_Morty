import { useEffect, useState } from "react";
import CardLocation from '../components/CardLocation';

const Location = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/location';

    const [location, setLocation] = useState([]);
    const [locacion, setlocacion] = useState([]);
    const [busqueda, setBusqueda] = useState("");

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
                {location.length > 0 &&
                    location.map(loc =>
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
        </div>
    )


}

export default Location