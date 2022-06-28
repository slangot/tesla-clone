import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@mui/icons-material/Language';

export default function OrderHeader() {
  return (
    <Container>
        <a href="#"><img src="../assets/images/logo.svg" alt="Tesla logo" /></a>
        <LangContainer>
          <LangIcon />
          FR
        </LangContainer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 40px;
  min-height: 60px;
  img {
    height: 20px;
  }
`

const LangContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
`

const LangIcon = styled(LanguageIcon)`
  margin-right: 10px;
`