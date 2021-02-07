import {Container,Jumbotron,Card,Row,Col,Accordion} from 'react-bootstrap';
import Navbar from '../component/navbar';
import './about.css';

function Error() {
 
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
         
<Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {[...Array(11)].map((x, i) =>
          <Col md="1" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i}</Card.Title>
              
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
    </Card.Body>
    </Card>
    
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      11 to 30
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Row>
    {[...Array(20)].map((x, i) =>
          <Col md="1" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i+11}</Card.Title>
             
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      31 to 60
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Row>
    {[...Array(31)].map((x, i) =>
          <Col md="1" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i+31}</Card.Title>
              
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      61 to 100
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Row>
    {[...Array(40)].map((x, i) =>
          <Col md="1" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'0.5rem'}}>
              <Card.Title>{i+61}</Card.Title>
              
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
 
</Container>

    </div>
  );
}

export default Error;
