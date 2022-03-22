import { useState, useEffect } from 'react';
import CardCharacters from '../components/CardCharacters';
import Button from '../components/Button';

const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setcurrentPage] = useState(0);

  const apiUrl = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(res => {
        const { results } = res;
        setCharacters(results);
        setPersonajes(results);
        console.log(res)
      })
  }, [])

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = personajes.filter((element) => {
      if (element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return element;
      }
    });
    setCharacters(resultadoBusqueda);
  }

  const filterCharacters = () => {
    return characters.slice(currentPage, currentPage + 5)
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
        {filterCharacters().length > 0 &&
          filterCharacters().map(char =>
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
      <div>
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </div>

    </div>
  )

}

export default Characters;