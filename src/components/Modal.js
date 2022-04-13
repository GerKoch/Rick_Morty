import styled from 'styled-components';

const Modal = ({ children, state }) => {
    return (
        <>
            {state &&
                <Overlay>
                    <ContenedorModal>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    )
}

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,65,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContenedorModal = styled.div`
    width: 200px;
    min-height: 100px;
    background: #fff;
    position: relative;
    border-radius: 25px;
    padding: 20px;
    background: #111;
`
