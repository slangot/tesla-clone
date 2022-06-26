import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Container>
      <a href="#">
        <img src="../assets/images/logo.svg" alt="" />
      </a>
      <LeftMenu>
          <a href="#">
            Model S
          </a>
          <a href="#">
            Model 3
          </a>
          <a href="#">
            Model X
          </a>
          <a href="#">
            Model Y
          </a>
      </LeftMenu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <SideMenu />
      </RightMenu>
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