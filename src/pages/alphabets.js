import {Container,Jumbotron,Tabs,Tab} from 'react-bootstrap';
import Navbar from '../component/navbar';

// import './about.css';

function Numbers() {
  return (
    <div>    
        <Navbar/>
        <br/>        
<Container>
   
 <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Jumbotron className="bg-light"> 
    <br/>
    <h1>404 error page not found 😥</h1>               
    </Jumbotron>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <Jumbotron className="bg-light"> 
    <br/>
    <h1>404 error page not found T! 😥</h1>               
    </Jumbotron>
  </Tab>
  <Tab eventKey="contact" title="Contact" >
  <Jumbotron className="bg-light"> 
    <br/>
    <h1>404 error T2 😥</h1>               
    </Jumbotron>
  </Tab>
</Tabs>
</Container>

    </div>
  );
}

export default Numbers;
