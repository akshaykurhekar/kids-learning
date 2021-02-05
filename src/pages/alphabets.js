import {React} from 'react';
import EngData from '../Data/EngData.json';
import Data1 from '../Data/Mdata.json';
import MData from '../Data/M1data.json';
import {Container,Jumbotron,Card,Row,Col,Image} from 'react-bootstrap';
import Navbar from '../component/navbar';
import './alphabets.css';
import Test from './AkshayMK1.jpg';

function Numbers() {

  return (
    <div className="alphabets">    
        <Navbar/>
        <br/>        
<Container>
<Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {
        EngData.map((variant, idx) => (
            <Col md="1" key={idx} className="media-col" >
            <Card className="mb-3 card-style">
             
              <Card.Body>
                <Card.Title>{variant.val}</Card.Title>
                {/* <Card.Text>
                  <Image src={variant.src} alt="test.." width="100" />
                </Card.Text> */}
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
    </Row>
    </Card.Body>
    </Card>  
    <br/>
    <Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {
        Data1.map((variant, idx) => (
            <Col md="1" key={idx} className="media-col" >
            <Card className="mb-3 card-style">             
              <Card.Body>
                <Card.Title>{variant.val}</Card.Title>
                {/* <Card.Text>
                  <Image src={variant.src} alt="test.." width="100" />
                </Card.Text> */}
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
    </Row>
    </Card.Body>
    </Card>  
    <br/>
    <Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {
        MData.map((variant, idx) => (
            <Col md="1" key={idx} className="media-col" >
            <Card className="mb-3 card-style">             
              <Card.Body>
                <Card.Title>{variant.val}</Card.Title>
                {/* <Card.Text>
                  <Image src={variant.src} alt="test.." width="100" />
                </Card.Text> */}
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
    </Row>
    </Card.Body>
    </Card>  
 
</Container>

    </div>
  );
}

export default Numbers;
