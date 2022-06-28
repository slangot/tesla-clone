import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';

export default function OrderSection() {
  return (
    <Container>
      <SliderContainer>
        <img src="../../assets/images/model-3-1-min.png" alt="model 3" />
        <SliderInfoContainer>

        </SliderInfoContainer>
      </SliderContainer>
      <InfoContainer>
        <InfoBubble>
          <InfoBubbleIcon />
          <p>
            Pour des options de livraison plus rapide, parcourez nos véhicules disponibles
          </p>
        </InfoBubble>
        <Title>
          <h1>Model 3</h1>
          <p>Livraison prévue : Jan 2023 - Mar 2023</p>
        </Title>
        <MainInfo>
          <FirstRow>
            <p>491<Unites>km</Unites></p>
            <p>225<Unites>km/h</Unites></p>
            <p>6,1<Unites>s</Unites></p>
          </FirstRow>
          <SecondRow>
            <p>Autonomie (WLTP)</p>
            <p>Vitesse maximale</p>
            <p>0 à 100 km/h</p>
          </SecondRow>
        </MainInfo>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding-top: 10vh;
  height: 100vh;
`

const SliderContainer = styled.div`
  position: relative;
  flex:2;
  margin-top: 10vh;
  img {
    width: 80%;
  }
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("${props.bgImage}")`}; */
`

const SliderInfoContainer = styled.div`
  position: absolute;
  width: 70%;
  margin: 0 auto;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(180,180,180,0.1);
  border-radius: 10px 10px 0px 0px;
  height: 80px;
`

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const InfoBubble = styled.div`
  display: flex;
  width: 70%;
  margin: 20px auto;
  margin-bottom: 40px;
  background-color: rgba(180,180,180,0.1);
  padding: 20px;
  border-radius: 10px;
  p {
    margin-left: 20px;
    font-size: 0.8rem;
    text-align: left;
  }
`

const InfoBubbleIcon = styled(InfoIcon)`

`


const Title = styled.div`
  h1 {
    padding: 10px;
  }
  p {
    font-size: 0.8rem;
  }
`

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

`

const Unites = styled.span`
  font-size: 0.8rem;
`

const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  p {
    max-width: 70px;
    font-size: 0.7rem;
  }
`