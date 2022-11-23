import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import Title from './Title'

const ContactUs = () => {
  return (
    <div style={{background:"#438ad4", padding:"45px"}}>
   <Title title={"Contact Us"} />
   <Container>
      <Row>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/4.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/5.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
        <Col>  <SingleCard image={"http://fefda.com/res/images/fp/6.png"} subtitle={"Play"} description={"While playing game we learn things quickly, we become familiar with other players even if they are stranger, we understand our own strengths and complex rules of the game. We believe game based approach improves the ability to learn quickly with excitement."} /></Col>
      </Row>
    </Container>
   </div>
  )
}

export default ContactUs