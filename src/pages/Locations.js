import { useEffect, useState } from "react";
import CardLocation from '../components/CardLocation';

const Location = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/location';

    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const { results } = res;
                setLocation(results);
            })
    }, [])

    return <div className="locations">
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
}

export default Location