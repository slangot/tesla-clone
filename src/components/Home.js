import React from 'react'
import styled from 'styled-components'
import Section from './Section'

export default function Home() {
  return (
    <Container>
      <Section 
        title="Model S" 
        description="Order Online for Touchless Delivery" 
        image="../assets/images/model-s.jpg"
        leftBtnText="Custom order"  
        rightBtnText="Existing inventory"  
      />
      <Section 
        title="Model Y" 
        description="Order Online for Touchless Delivery" 
        image="../assets/images/model-y.jpg"
        leftBtnText="Custom order"  
        rightBtnText="Existing inventory"  
      />
      <Section 
        title="Model 3" 
        description="Order Online for Touchless Delivery" 
        image="../assets/images/model-3.jpg"
        leftBtnText="Custom order"  
        rightBtnText="Existing inventory"  
      />
      <Section 
        title="Model X" 
        description="Order Online for Touchless Delivery" 
        image="../assets/images/model-x.jpg"
        leftBtnText="Custom order"  
        rightBtnText="Existing inventory"  
      />
      <Section 
        title="Lowest Cost Solar Panels in America" 
        description="Money-back guarantee" 
        image="../assets/images/solar-panel.jpg"
        leftBtnText="Order order"  
        rightBtnText="Learn more"  
      />
      <Section 
        title="Solar for New Roofs" 
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" 
        image="../assets/images/solar-roof.jpg"
        leftBtnText="Order order"  
        rightBtnText="Learn more"  
      />
      <Section 
        title="Accessories" 
        description="" 
        image="../assets/images/accessories.jpg"
        leftBtnText="Shop Now"  
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`
