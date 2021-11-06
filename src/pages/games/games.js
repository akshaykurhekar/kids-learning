import { Row, Col, Card } from "react-bootstrap";

import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Practicals from "../../component/tspractical";
import "./games.css";

function Games() {
  return (
    <div>
      <Navbar />
      <Practicals />
      <Row style={{ padding:'20px' }}>
        <Col className="md-col-6">
          <Card >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Game 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <a href="/kids-learning/#/game1" className="btn" >Let's Start Game</a>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-col-6">
          <Card >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Game 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn">Let's Start Game</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-col-6">
        <Card >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Game 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn">Let's Start Game</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="md-col-6 ">
        <Card >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Game 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn">Let's Start Game</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default Games;
