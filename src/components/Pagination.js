import Button from '../components/button/Button'; 
import styled from 'styled-components';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {onPrevious()}

    const handleNext = () => {onNext()}

    return (
        <Nav>
                {prev ?
                    <Button onClick={handlePrevious}>Previous</Button>
                    :null
                }
                {next ?
                    <Button onClick={handleNext}>Next</Button>
                   : null
                }
        </Nav>
    )
}

export default Pagination;

const Nav = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 15px;
`