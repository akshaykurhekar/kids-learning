import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';

import './about.css';

function Practice() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
         
 <Jumbotron className="bg-light"> 
 <br/>
     <h1>Practice</h1>          
 </Jumbotron>
 
</Container>

    </div>
  );
}

export default Practice;
