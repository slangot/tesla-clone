import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';

export default function Header() {

  const [burgerNavDisplay, setBurgerNavDisplay] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <BlurEffect show={burgerNavDisplay} onClick={() => setBurgerNavDisplay(false)}/>
      <a href="#">
        <img src="../assets/images/logo.svg" alt="Tesla logo" />
      </a>
      <LeftMenu>
          {cars && cars.map((car, index) => <a href="#" key={index}>{car}</a>)}
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <SideMenu onClick={() => setBurgerNavDisplay(true) }/>
      </RightMenu>
      <BurgerNav show={burgerNavDisplay}>
        <CloseContainer>
          <CustomClose onClick={() => setBurgerNavDisplay(false)}/>
        </CloseContainer>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Insurance</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Power Wall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relations</a></li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  img {
    height: 20px;
  }
`

const BlurEffect = styled.div`
  display: ${props => props.show ? 'block' : 'none'}; //Check the props to show/hide
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(3px);
`

const LeftMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 600;
    padding: 8px 15px;
    flex-wrap: no-wrap;
    font-size: 0.8rem;
    background-color: transparent;
    transition: 0.3s linear;
    border-radius: 30px;

  }

  a:hover {
    background-color: rgba(100, 100, 100, 0.1);
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 10px;
    font-size: 0.8rem;
  }
`

const SideMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  position: fixed;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; //Check the props to show/hide
  transition: 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`



const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`