import { useState, useEffect } from 'react';
import CardCharacters from '../components/CardCharacters';

const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        const { results } = res;
        setCharacters(results);
        setPersonajes(results);
      })
  }, [])

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = personajes.filter((element) => {
      if(element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return element;
      }
    });
    setCharacters(resultadoBusqueda);
  }

  return (
    <div className='character'>
      <div className='containerInput'>
        <input 
          className='inputBuscar' 
          value={busqueda} 
          placeholder="Buscar por nombre" 
          onChange={handleChange} 
        />
      </div>
      <div className='character_center'>
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
      
    </div>
  )

}

export default Characters;