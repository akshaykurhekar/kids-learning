import {Row,Col,Container} from 'react-bootstrap';
import Practicals from '../component/tspractical';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

import Number from './SVG/tables.svg';
import AboutUs from './SVG/aboutUs.svg';
import svg1 from './SVG/numbers123.svg';
import abc from './SVG/abc.svg';
import practice from './SVG/practice.svg';
import HomeSvg from './SVG/Kids.svg';
import words from './SVG/words.svg';
import './home.css';

import Speech from "./Speech/Speech";

function Home() {
  return (
    <div>    
        <Navbar/>
        <Practicals/>    
        <Container>
        <br/>        
        <Speech text="If a child cannot learn in the way we teach, we must teach in a way the child can learn">
            <h2 className="home mt-5 card-style ">"If a child cannot learn in the way we teach, we must teach in a way the child can learn." </h2>
        </Speech>
        </Container>
        <br/>
        <Row className="rowImg">
            <Col md="5">
            <img className="homeImg" src={HomeSvg} alt="demo svg" width="550" />
            </Col>            
            <Col md="7">
                <Row className="text-center" style={{marginTop:"12px"}}>
                    <Col md="4" className="p-2 ">
                    <a href="/kids-learning/#/alphabets" ><img src={abc} alt="demo svg" width="120" /></a>
                    </Col>
                    <Col md="4" className="p-2">
                    <a href="/kids-learning/#/words"><img src={words} alt="demo svg" width="120" /></a>
                    </Col>
                    <Col md="4" className="p-2">
                    <a href="/kids-learning/#/numbers"><img src={svg1} alt="demo svg" width="120" /></a>
                    </Col>                   
                </Row>
                <Row className="text-center p-1">
                    <Col md="2" >                        
                    </Col>
                    <Col md="4" className="mt-3 " style={{paddingTop: "25px"}}>
                    <a href="/kids-learning/#/table"><img src={Number} alt="demo svg" width="120" /> </a>
                    </Col>
                    <Col md="4" >
                    <a href="/kids-learning/#/practice"><img src={practice} alt="demo svg" width="200" /></a>
                    </Col>
                    <Col md="2">                    
                    </Col>                   
                </Row>
                <Row className="text-center p-2 m-1">
                    <Col md="4" >                        
                    </Col>
                    <Col md="4" >
                    <a href="/kids-learning/#/about"><img src={AboutUs} alt="demo svg" width="200" /></a>
                    </Col>
                    <Col md="4">                    
                    </Col>                   
                </Row>
                
            </Col>    
        </Row>
                
        <Footer/>    
    </div>
  );
}

export default Home;
