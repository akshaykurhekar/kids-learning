import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';

import './about.css';

function Error() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
         
 <Jumbotron className="bg-light"> 
 <br/>
     <h1>Numbers</h1>          
 </Jumbotron>
 
</Container>

    </div>
  );
}

export default Error;
