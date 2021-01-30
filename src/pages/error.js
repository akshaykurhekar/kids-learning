import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';
import errorSvg from './error404.svg';
 
import './about.css';

function Error() {
  return (
    <div>    
        <Navbar/>
          
        <Container>

        <img src={errorSvg} alt="error 404" height="700" />          

        </Container>

    </div>
  );
}

export default Error;
