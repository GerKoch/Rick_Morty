import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import { useState } from 'react';

const Navbar = () => {

    const[clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return(
        <div>
            <NavContainer>
                <h2>Rick y Morty</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href='/'>Home</a>
                    <a href='/characters'>Characters</a>
                    <a href='/locations'>Locations</a>
                    <a href='/episodes'>Episodes</a>
                </div>
                <div className='burguer'>
                    <BurguerButton click={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </div>
    )
}

export default Navbar;

const NavContainer = styled.nav`
    h2{
       color: green;
       font-weight: bold 400;
    }
    padding: 2rem;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: green;
        text-decoration: none;
        margin-right: 1rem;
    }
    .links{
     position: absolute;
     left: -2000px;
     margin-left: auto;
     margin-right: auto;
     text-align: center;
     transition: all .5s ease;
     a{
         color: green;
         font-size: 2rem;
         display: block;
     }
     @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: green;
            display: inline;
        }
     }
 }

 .links.active{
     width: 100%;
     height: 100%;
     display: block;
     position: absolute;
     margin-left: auto;
     margin-right: auto;
     top: 15%;
     left: 0;
     right: 0;
     text-align: center;
     background-color: #000;
     a{
        font-size: 2rem;
        margin-top: 1em;
        color: green;
     }
 }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
    `

const BgDiv = styled.div`
    position: absolute;
    background-color: #222;
    left: -2000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .5s ease;

    &.active{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    
    }
`