import {Row,Col,Image,Container,Jumbotron} from 'react-bootstrap';
import Practicals from '../component/tspractical';
import Navbar from '../component/navbar';
import akshay from './AkshayMK1.jpg';
import './about.css';

function Home() {
  return (
    <div>    
        <Navbar/>
        <Practicals/>    
        <Container>        
            <h1> Home Page... </h1>
        </Container>
    </div>
  );
}

export default Home;
