import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

export default function Section({ title, description, image, leftBtnText, rightBtnText }) {
  return (
    // Pass props to the component
    <Wrap bgImage={image}>
      <Fade bottom>
        <ItemText>
          <h1>
            { title }
          </h1>
          <p>
            { description }
          </p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              { leftBtnText }
            </LeftButton>
            {rightBtnText && 
              <RightButton>
              { rightBtnText }
              </RightButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src="../assets/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("${props.bgImage}")`} // Get props from the component
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Buttons = styled.div`

`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

// Heritage from LeftButton Style
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s
`