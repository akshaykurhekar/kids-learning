import {Nav,Navbar, Button, Form } from 'react-bootstrap';
import './navbar.css';

function Navbarkids() {
  return (
    <div className="Navbar">
    <Navbar expand="lg">
    <Navbar.Brand className="heading" href="/kids-learning/#/">KG E-Book</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/kids-learning/#/alphabets"><img src="https://img.icons8.com/color/26/000000/alpha.png" alt="Alphabets_icon"/> Alphabets </Nav.Link>
        <Nav.Link href="/kids-learning/#/numbers"><img src="https://img.icons8.com/color/26/000000/1-circle--v3.png" alt="number_icon"/> Numbers </Nav.Link>
        <Nav.Link href="/kids-learning/#/words"><img src="https://img.icons8.com/color/26/000000/document--v1.png" alt="words_icon"/> Words </Nav.Link>
        <Nav.Link href="/kids-learning/#/table"><img src="https://img.icons8.com/color/26/000000/sigma.png" alt="table_icon"/> Table's </Nav.Link>
        <Nav.Link href="/kids-learning/#/about"><img src="https://img.icons8.com/color/26/000000/about.png" alt="About_icon"/> About Us</Nav.Link>
      </Nav>
      <Form inline>
          <Button href="/kids-learning/#/practice" variant="outline-success"> Practice <img src="https://img.icons8.com/color/26/000000/edit--v1.png" alt="Practice_icon"/></Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}


export default Navbarkids;