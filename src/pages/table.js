import {Container,Jumbotron} from 'react-bootstrap';
import Navbar from '../component/navbar';

// import './table.css';

function Tables() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
         
 <Jumbotron className="bg-light"> 
 <br/>
     <h1>Tables.....</h1>          
 </Jumbotron>
 
</Container>

    </div>
  );
}

export default Tables;
