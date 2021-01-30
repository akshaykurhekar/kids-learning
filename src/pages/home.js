import {Row,Col,Image,Container,Jumbotron} from 'react-bootstrap';
import Practicals from '../component/tspractical';
import Navbar from '../component/navbar';
import svg from './demo.svg';
import './about.css';

function Home() {
  return (
    <div>    
        <Navbar/>
        <Practicals/>    
        <Container>        
            <h1> Home Page... </h1>
        </Container>
        <img src={svg} alt="demo svg" width="300" />        
    </div>
  );
}

export default Home;
