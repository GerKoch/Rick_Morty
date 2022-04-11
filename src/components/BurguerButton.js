import styled from 'styled-components';

const BurguerButton = (props) => {
    return (
        <Burger>
            <div onClick={props.handleClick} className='icon nav-icon-5'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burger>
    )
}

export default BurguerButton;

const Burger = styled.div`
.nav-icon-5{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon-5 span{
  background-color: green;
  position: absolute;
  border-radius: 2px;
  width:100%;
  height: 4px;
}
.nav-icon-5 span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon-5 span:nth-child(2){
  top:13px;
  left: 0px;
}
.nav-icon-5 span:nth-child(3){
  bottom:0px;
  left: 0px;
}
`