import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import './about.css';

function Words() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
         
 <Jumbotron className="bg-light"> 
 <br/>
     <h1>Words 😥</h1>          
 </Jumbotron>
 
</Container>
<Footer/>
    </div>
  );
}

export default Words;
