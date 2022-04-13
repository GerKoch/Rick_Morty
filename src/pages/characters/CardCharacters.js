import styled from "styled-components";
import Modal from '../../components/Modal';
import Button from '../../components/button/Button';
import { useState } from 'react';

const CardCharacters = ({ id, name, image, species, status, gender }) => {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <Card>
                <p onClick={() => setModal(!modal)}>{name}</p>
                <img alt={id} src={image} onClick={() => setModal(!modal)}/>

                <Modal state={modal}>
                    <div>
                        <p>Specie: {species}</p>
                        <p>Status: {status}</p>
                        <p>Gender: {gender}</p>
                    </div>
                    <Button onClick={() => setModal(false)}>OK</Button>
                </Modal>

            </Card>
        </div>
    )
}

export default CardCharacters;

const Card = styled.div`
  display: inline-block;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  overflow: auto;
  color: gray;
  background-color: #000;
  margin: 10px;

  img{
      border-radius: 10px 10px;
    width: 100%;
    height: 100%;
  }
`
