import { useState, useEffect } from 'react';
import CardCharacters from '../components/CardCharacters';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const apiUrl = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                const { results } = res;
                setCharacters(results);
            })
    }, [])

    return <div className='character'>
      <p>Characters</p>
      {characters.length > 0 &&
        characters.map(char => 
          <CardCharacters
            key={char.id} 
            id={char.id} 
            name={char.name} 
            image={char.image} 
            species={char.species}
            status={char.status}
            gender={char.gender}
          />
        )
      }
    </div>
}

export default Characters