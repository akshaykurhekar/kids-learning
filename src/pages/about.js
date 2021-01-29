import {Row,Col,Image,Container,Jumbotron} from 'react-bootstrap';
import Practicals from '../component/tspractical';
import Navbar from '../component/navbar';
import akshay from './AkshayMK1.jpg';
import './about.css';

function About() {
  return (
    <div>    
        <Navbar/>
        <Practicals/>    
      <Container>
          <br/>                
  <Row>
    <Col xs={4} md={4}>
      
    </Col>
    <Col xs={4} md={4}>
      <Image src={akshay} thumbnail roundedCircle width="170" />
    </Col>
    <Col xs={4} md={4}>
      
    </Col>
  </Row>
  <br/>
 <Jumbotron className="bg-warning about"> 
     <h1>Open source</h1>
     <h2>This website is for learning purpose </h2>
     
 </Jumbotron>
 <h3>Created with love by Akshay Kurhekar</h3>
</Container>

    </div>
  );
}

export default About;
