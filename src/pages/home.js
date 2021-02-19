import {Row,Col,Image,Container,Jumbotron} from 'react-bootstrap';
import Practicals from '../component/tspractical';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

import Number from './SVG/mathematics-animate.svg';
import AboutUs from './SVG/aboutUs.svg';
import svg1 from './SVG/Notebook-amico.svg';
import svg3 from './SVG/number.svg';
import svg4 from './SVG/abc.svg';
import svg5 from './SVG/notes-animate.svg';
import svg6 from './SVG/Kids Studying from Home-pana.svg';
import svg7 from './SVG/kids wearing masks at school-amico.svg';
import svg8 from './SVG/flower.svg';
import './about.css';

function Home() {
  return (
    <div>    
        <Navbar/>
        <Practicals/>    
        <Container>        
            <h1> Learn With Joy </h1>
        </Container>
        <a href="/words"><img src={svg1} alt="demo svg" width="300" /></a>
        <img src={Number} alt="demo svg" width="300" />        
        
        <img src={AboutUs} alt="demo svg" width="300" />
        <img src={svg3} alt="demo svg" width="300" />
        <img src={svg4} alt="demo svg" width="300" />        
        <img src={svg5} alt="demo svg" width="300" />        
        <img src={svg6} alt="demo svg" width="300" />
        <img src={svg7} alt="demo svg" width="300" />        
        <img src={svg8} alt="demo svg" width="300" /> 
        <br/>
         
        <Footer/>    
    </div>
  );
}

export default Home;
