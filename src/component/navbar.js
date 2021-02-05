import {Nav,Navbar, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import './navbar.css';

function Navbarkids() {
  return (
    <div className="Navbar">
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/"><h1>KG E-Book</h1> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="/"><img src="https://img.icons8.com/ultraviolet/26/000000/home--v1.png"/></Nav.Link> */}
        <Nav.Link href="/alphabets"><img src="https://img.icons8.com/color/26/000000/alpha.png" alt="Alphabets_icon"/> Alphabets </Nav.Link>
        <Nav.Link href="/numbers"><img src="https://img.icons8.com/color/26/000000/1-circle--v3.png" alt="number_icon"/> Numbers </Nav.Link>
        <Nav.Link href="/words"><img src="https://img.icons8.com/color/26/000000/document--v1.png" alt="words_icon"/> Words </Nav.Link>
        <Nav.Link href="/table"><img src="https://img.icons8.com/color/26/000000/sigma.png" alt="table_icon"/> Table's </Nav.Link>
        {/* <Nav.Link >Practice<img src="https://img.icons8.com/color/26/000000/edit--v1.png"/></Nav.Link> */}
        <Nav.Link href="/about"><img src="https://img.icons8.com/color/26/000000/about.png" alt="About_icon"/> About </Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Form inline>
          <Button href="/practice" variant="outline-success"> Practice <img src="https://img.icons8.com/color/26/000000/edit--v1.png" alt="Practice_icon"/></Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}

export default Navbarkids;