import {Row,Col,Image,Container,Jumbotron} from 'react-bootstrap';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import akshay from './AkshayMK1.jpg';
import AboutUs from './AboutUs.svg';
import './about.css';

function About() {
  return (
    <div >     
        <Navbar/>
       <Row>
           <Col>
           <img className="about_svg" src={AboutUs} alt="about us" /> 
           </Col>
           <Col className="text-center about">

           <Image className="profile_image" src={akshay} thumbnail roundedCircle />    
    
    <br/><br/>
        
       <h1>Akshay Manohar Rao Kurhekar</h1>
       <h2>This website is for learning purpose </h2>
       
           </Col>
       </Row>
    <Footer/>
     
       


    </div>
  );
}

export default About;
