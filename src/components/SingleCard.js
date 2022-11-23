import { Button, Card } from "react-bootstrap";

const SingleCard = ({image, subtitle, description}) =>{
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
    </Card>
)
}
 export default SingleCard;

