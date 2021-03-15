import {React, useState} from 'react';

import EngData from '../Data/EngData.json';
import MarathiAlpha from '../Data/Mdata.json';
import Barakade from '../Data/M1data.json';
import {Container,Card,Row,Col, Accordion,Tab} from 'react-bootstrap';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Test from '../Data/test/test.json';
import Speech from "./Speech/Speech";

import './alphabets.css';
import TabsDisplay from "../component/Tabs/TabsDisplay";

function Numbers() {
    
    const [name,setName] = useState('');
   
    const test=(idx)=>{       
     setName(Test.map((value,id)=>{
        return( 
           <Card key={id}>
               <Card.Body>
                   {value.val}
               </Card.Body>
           </Card>
        );
    }));
    }

  return (
    <div >    
        <Navbar/>        
        <br/>    

<Container className="alphabets">
    <TabsDisplay DefaultTab="English_Tab">
    <Tab eventKey="English_Tab" title="English Alphabets Abc">
        <br/>
        <Accordion defaultActiveKey="0">
        <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
            English Alphabets Abc...
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Row>
            {
                EngData.map((variant, idx) => (
                    <Col md="2" key={idx}  className="media-col" >
                    <Speech  text={variant.val}>
                            <Card className="mb-3 card-style">                    
                                <Card.Body style={{padding:'0.8rem'}}>
                                <Card.Title>{variant.val}</Card.Title>                    
                                </Card.Body>
                            </Card>
                    </Speech>
                    </Col>                    
                    ))
            }    
            </Row>   
            </Card.Body>
        </Accordion.Collapse>
        </Card>
        </Accordion> 
    
    </Tab>
    <Tab eventKey="Marathi" title="Marathi Alphabets"> 
    <br/>       
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Marathi Alphabets
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>        
    <Row>
    {
        MarathiAlpha.map((variant, idx) => (
            <Col md="2" key={idx} className="media-col" >
            <Card className="mb-3 card-style">             
              <Card.Body style={{padding:'0.8rem'}}>
                <Card.Title>{variant.val}</Card.Title>                
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
    </Row>
    </Card.Body>
    </Accordion.Collapse>
    </Card>
    </Accordion>  
    <br/>
    </Tab>
    <Tab eventKey="Marathi_Barakhadi" title="Marathi Barakhadi">
        <br/><br/>
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
     Marathi Barakhadi
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
    {/* <div style={{backgroundColor: "grey",display:"flex", alignItems:"center", justifyContent:"space-between", boxSizing:"border-box",fontSize:"22px"  }}>
       {name}       
    </div> */}
    <br/>
    <Row>       
        <br/>          
    {  
        Barakade.map((variant) => (
            <Col md="2" key={variant.id} className="media-col" onClick={() => test(variant.id) } >
            <Card className="mb-3 card-style">             
              <Card.Body style={{padding:'0.8rem'}}>
                <Card.Title>{variant.val}</Card.Title>
                
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
    </Row>
    </Card.Body>
    </Accordion.Collapse>
    </Card>
    </Accordion>  
    </Tab>

    </TabsDisplay>
</Container>
    <Footer/>
    </div>
  );
}

export default Numbers;
