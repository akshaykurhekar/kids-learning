import {React} from 'react';
import EngData from '../Data/EngData.json';
import Data1 from '../Data/Mdata.json';
import MData from '../Data/M1data.json';
import {Container,Card,Row,Col} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import './alphabets.css';

function Numbers() {

  return (
    <div >    
        <Navbar/>
        
        <br/>        
<Container className="alphabets"> 
<Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {
        EngData.map((variant, idx) => (
            <Col md="1" key={idx} className="media-col" >
            <Card className="mb-3 card-style">
             
              <Card.Body style={{padding:'1rem'}}>
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
              <Card.Body style={{padding:'1rem'}}>
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
              <Card.Body style={{padding:'1rem'}}>
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
    <Footer/>
    </div>
  );
}

export default Numbers;
