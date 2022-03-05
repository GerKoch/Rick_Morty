import { NavLink } from 'react-router-dom';
import Button from './Button';

function Nav() {
  return (
    <div className="nav">
      <Button onClick={() => console.log('Home')}>
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button onClick={() => console.log('Characters')}>
        <NavLink to="/characters">Characters</NavLink>
      </Button>
      <Button onClick={() => console.log('Locations')}>
        <NavLink to="/locations">Locations</NavLink>
      </Button>
      <Button onClick={() => console.log('Episodes')}>
        <NavLink to="/episodes">Episodes</NavLink>
      </Button>
    </div>
  )
}

export default Nav