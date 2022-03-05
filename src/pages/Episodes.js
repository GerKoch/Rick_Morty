import { useState, useEffect } from "react";
import CardEpisodes from "../components/CardEpisodes";

const Episodes = () => {
    const apiUrl = 'https://rickandmortyapi.com/api/episode';

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const { results } = res
                setEpisodes(results);
            })
    }, [])

    return <div className="episodes">
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
}

export default Episodes;