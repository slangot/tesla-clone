import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function OrderSection() {
  return (
    <Container>
      <SliderContainer>
        <img src="../../assets/images/model-3-1-min.png" alt="model 3" />
        <SliderToastContainer>
          <ArrowIconContainer>
            <ArrowIcon sx={{ fontSize:"15px" }}/>
          </ArrowIconContainer>
          <InfoSliderContainer>
            <InfoSliderContainerFirst>
              <h3>A partir de 428,44€ <span className='smallInfo'>/mois* LOA</span></h3>
              <span className='divider'></span>
              <p>A partir de - 75 € /mois Économies de carburant estimées</p>
            </InfoSliderContainerFirst>
            <InfoSliderContainerSecond>
              <p>
              1er loyer majoré de 11 900 €. Un credit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager
              </p>
            </InfoSliderContainerSecond>
          </InfoSliderContainer>
        </SliderToastContainer>
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

const SliderToastContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  bottom: 0;
  padding: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(180,180,180,0.1);
  border-radius: 10px 10px 0px 0px;
  height: 80px;
`

const ArrowIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  align-content: center;
  padding: 15px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
`

const ArrowIcon = styled(ArrowBackIosIcon)`
position: absolute;
top: 50%;
transform: rotate(90deg) translateX(-25%);
`

const InfoSliderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  margin: 0 15px;
`

const InfoSliderContainerFirst = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  h3 {
    font-size: 0.7rem;
  }
  .smallInfo {
    font-size: 0.6rem;
    font-weight: normal;
  }
  p{
    font-size: 0.6rem;
  }
  .divider {
    height: 15px;
    width: 2px;
    margin: 0 20px;
    background-color: rgba(0,0,0,0.1);
  }
`

const InfoSliderContainerSecond = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 10px;
  p {
    font-size: 0.6rem;
  }
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