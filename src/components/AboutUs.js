import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import Title from './Title'

const AboutUs = () => {
  return (
   <div style={{background:"#438af4", padding:"45px"}}>
   <Title title={"About Us"} />
   <Container>
      <Row>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/1.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/2.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/3.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
      </Row>
    </Container>
   </div>
  )
}

export default AboutUs