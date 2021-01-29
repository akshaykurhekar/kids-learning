import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';

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

    </div>
  );
}

export default Words;
