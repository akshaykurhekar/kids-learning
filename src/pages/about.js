import {Row,Col,Image} from 'react-bootstrap';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import akshay from './AkshayMK1.jpg';
import AboutUs from './SVG/aboutUs.svg';
import Practicals from '../component/tspractical';
import './about.css';
import whatsapp from './SVG/whatsapp.svg';
import github from './SVG/github.svg';
import linkedin from './SVG/linkedin.svg';
import mail from './SVG/gmail.svg';

function About() {

    
  return (
    <div >     
        <Navbar/>
        <Practicals/>
       <Row>
           <Col className="md-col-6 svg" >
           <img className="about_svg" src={AboutUs} alt="about us" /> 
           </Col>
           <Col  className="md-col-6 text-center about ">

           <Image className="profile_image" src={akshay} thumbnail roundedCircle />    
    
    <br/><br/>
        
       <p className="name" style={{fontWeight: "600"}}>Akshay Manohar Kurhekar</p>

        <h2>I am Student of Computer Science who
        Loves to play with javaScript. This is my small contribution to the society for kids Learning,
        Those who want to connect with me, follow my social handles
        </h2>
 
       <div className="text-center p-3">
        <a className="p-2" href="tel:+919552259961"><img src={whatsapp} alt="whatsapp" width="50" /></a>
        <a className="p-2" href="https://www.linkedin.com/in/akshay-kurhekar-64438a168/" rel="noreferrer" target="_blank"><img src={linkedin} alt="linkedin" width="50" /></a>
        <a className="p-2" href="https://github.com/akshaykurhekar" rel="noreferrer" target="_blank"><img src={github} alt="github" width="50" /></a>
        <a className="p-2" href={`mailto:kurhekar145@gmail.com`}><img src={mail} alt="mail" width="50" /></a>
       </div>
           </Col>
       </Row>
    <Footer/>
   
    </div>
  );
}

export default About;
