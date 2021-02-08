import {Container,Card,Row,Col,Accordion} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
// import './table.css';

function Tables() {
  return (
    <div>    
        <Navbar/>
        <br/>        
        <Container>
        
             <Accordion defaultActiveKey="0">
           <Card>
             <Accordion.Toggle as={Card.Header} eventKey="0">
               1 to 4
             </Accordion.Toggle>
             <Accordion.Collapse eventKey="0">
               <Card.Body>
               <Row>
             {[...Array(4)].map((x, i) =>
                   <Col md="3" key={i} className="media-col" >
                   <Card className="mb-3 card-style">
                    
                     <Card.Body style={{padding:'1.5rem'}}>
                         {[...Array(10)].map((x, j) =>
                            <Card.Title>{i+1} X {j+1}  = {(i+1)*(j+1)}</Card.Title>     
                         )}                      
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
               5 to 10
             </Accordion.Toggle>
             <Accordion.Collapse eventKey="1">
               <Card.Body>
               <Row>
               {[...Array(6)].map((x, i) =>
                   <Col md="3" key={i} className="media-col" >
                   <Card className="mb-3 card-style">
                    
                     <Card.Body style={{padding:'1.5rem'}}>
                         {[...Array(10)].map((x, j) =>
                            <Card.Title>{i+5} X {j+1}  = {(i+5)*(j+1)}</Card.Title>     
                         )}                      
                     </Card.Body>
                   </Card>
                   </Col>
                 )}
             </Row>
               </Card.Body>
             </Accordion.Collapse>
           </Card>

           <Card>
             <Accordion.Toggle as={Card.Header} eventKey="3">
               11 to 20
             </Accordion.Toggle>
             <Accordion.Collapse eventKey="3">
               <Card.Body>
               <Row>
               {[...Array(10)].map((x, i) =>
                   <Col md="3" key={i} className="media-col" >
                   <Card className="mb-3 card-style">
                    
                     <Card.Body style={{padding:'1.5rem'}}>
                         {[...Array(10)].map((x, j) =>
                            <Card.Title>{i+11} X {j+1}  = {(i+11)*(j+1)}</Card.Title>     
                         )}                      
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
               21 to 50
             </Accordion.Toggle>
             <Accordion.Collapse eventKey="2">
               <Card.Body>
               <Row>
               {[...Array(30)].map((x, i) =>
                   <Col md="3" key={i} className="media-col" >
                   <Card className="mb-3 card-style">
                    
                     <Card.Body style={{padding:'1.5rem'}}>
                         {[...Array(10)].map((x, j) =>
                            <Card.Title>{i+21} X {j+1}  = {(i+21)*(j+1)}</Card.Title>     
                         )}                      
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
<Footer/>
    </div>
  );
}

export default Tables;
