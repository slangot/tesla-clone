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
      <a href="#">
        <img src="../assets/images/logo.svg" alt="Tesla logo" />
      </a>
      <LeftMenu>
          {cars && cars.map((car, index) => <a href="#" key={index}>{car}</a>)}
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <SideMenu onClick={() => setBurgerNavDisplay(true) }/>
      </RightMenu>
      <BurgerNav show={burgerNavDisplay}>
        <CloseContainer>
          <CustomClose onClick={() => setBurgerNavDisplay(false)}/>
        </CloseContainer>
        {cars && cars.map((car, index) => <li key={index}><a href="#">{car}</a></li>)}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Power Wall</a></li>
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
`

const LeftMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
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
    text-transform: uppercase;
    margin-right: 10px;
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
`

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`