import {React, useState} from 'react';
import {Container,Tab,Tabs,Row,Col,Card,Accordion,Image} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import GeneralWords from '../Data/words.json';
import Color from '../Data/Color.json';
import Animals from '../Data/Animals.json';
import Plants from '../Data/Plants.json';
import Flower from '../Data/Flower.json';
import Months from '../Data/Months.json';
import Days from '../Data/Days.json';
import Planets from '../Data/Planets.json';
import './about.css';
import akshay from './AkshayMK1.jpg';
import Venus from '../pages/PlanetsImg/Venus.jpg';
import Earth from '../pages/PlanetsImg/Earth.jpg';


function ControlledTabs() {
    const [key, setKey] = useState('home');
    
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="General Words">
        <br/>
        <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Top 30 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Row> 
            {
                GeneralWords.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    {/* <Card className="mb-3 card-style">              */}
                      {/* <Card.Body style={{padding:'1rem'}}> */}
                        <Card.Title>
                            {variant.val}
                            </Card.Title>
                        {/* <Card.Text>
                          <Image src={variant.src} alt="test.." width="100" />
                        </Card.Text> */}
                      {/* </Card.Body>
                    </Card> */}
                    </Col>
                  ))
            }    
            </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
       
        </Tab>
        <Tab eventKey="Animals" title="Animals">
        <br/>
        <Row> 
            {
                Animals.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Birds" title="Birds">
        <br/>
        <Row> 
            {
                Flower.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Plants" title="Plants" >
        <br/>
        <Row> 
            {
                Plants.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Flower" title="Flower" >
        <br/>
        <Row> 
            {
                Flower.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="planets" title="planets" >
        <br/>
        <Row>        
            {
               
               Planets.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col text-center" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                        <Image src={variant.val} alt={variant.val} roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Months" title="Months" >
        <br/>
        <Row> 
            {
                Months.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                        {idx+1}. {variant.val}
                            </Card.Title>
                         
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Days" title="Days" >
        <br/>
        <Row> 
            {
                Days.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem'}}>
                        <Card.Title>
                            {idx+1}. {variant.val}
                            </Card.Title>
                         {/* <Card.Text>
                          <Image src={variant.src} alt="test.." width="100" />
                        </Card.Text>  */}
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Colors" title="Colors" >
            <br/>
        <Row> 
            {
                Color.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem', display:'flex',direction:'row'}}>                      
                        
                        <Card style={{width:'70px',borderRadius:'50px', backgroundColor: variant.val}}>
                               <Card.Body>
                                   
                                </Card.Body> 
                          </Card>
                          <Card.Title style={{paddingLeft:'2rem'}}>
                            {variant.val}
                            </Card.Title>
                         
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Thinks" title="Thinks" >
        <br/>
        <Row> 
            {
                Flower.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
        <Tab eventKey="Places" title="Places" >
        <br/>
        <Row> 
            {
                Flower.map((variant, idx) => (
                    <Col md="3" key={idx} className="media-col" >
                    <Card className="mb-3 card-style">             
                      <Card.Body style={{padding:'1rem','text-align':'center'}}>
                        <Card.Title>
                        <Image src={akshay}  roundedCircle style={{padding:'1rem',width:'200px'}} />
                                <br/>                                
                            {variant.val}
                            </Card.Title>                     
                       </Card.Body>
                    </Card> 
                    </Col>
                  ))
            }    
            </Row>
        </Tab>
      </Tabs>
    );
  }

function Words() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
 
 <br/>
    <ControlledTabs/>          
  
</Container>
<Footer/>
    </div>
  );
}

export default Words;
