import {Container} from 'react-bootstrap';
import Navbar from '../component/navbar';
import errorSvg from './error404.svg';
 
import './about.css';

function Error() {
  return (
    <div>    
        <Navbar/>
          
        <Container>

        <img src={errorSvg} alt="error 404" width="100%" height="550px" />          

        </Container>

    </div>
  );
}

export default Error;
