import { useState, useEffect } from 'react';
import CardCharacters from './CardCharacters';
import styled from 'styled-components';
import Pagination from '../../components/Pagination';


const Characters = () => {

  const apiUrl = `https://rickandmortyapi.com/api/character`;

  const [characters, setCharacters] = useState([]);
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results);
        setPersonajes(res.results);
        setInfo(res.info);
        console.log(res)
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchCharacters(apiUrl);
  }, [])

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }



  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = personajes.filter((element) => {
      if (element.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        ||
        element.species.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return element;
      }
    });
    setCharacters(resultadoBusqueda);
  }

  const filterCharacters = () => {
    return characters.slice(currentPage, currentPage + 20)
  }

  return (
    <div>
      <BtnInput>
        <input
          className='inputBuscar'
          value={busqueda}
          placeholder="Search for name or specie"
          onChange={handleChange}
        />
      </BtnInput>
      <Pagination className="pag"
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <BgChar>
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
            />)
        }
      </BgChar>
      <Pagination className="pag"
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  )
}

export default Characters;

const BgChar = styled.div`
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

const Btn = styled.div`
  display: flex;
  flex-direction: row;
`
