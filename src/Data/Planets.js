import {Row,Col,Image,Card} from 'react-bootstrap';
import Mercury from './PlanetsImg/Mercury.jpg';
import Venus from './PlanetsImg/Venus.jpg';
import Earth from './PlanetsImg/Earth.jpg';
import Mars from './PlanetsImg/Mars.jpg';
import Jupiter from './PlanetsImg/Jupiter.jpg';
import Saturn from './PlanetsImg/Saturn.jpg';
import Uranus from './PlanetsImg/Uranus.jpg';
import Neptune from './PlanetsImg/Neptune.jpg';
import Pluto from './PlanetsImg/Pluto.jpg';
import Sun from './PlanetsImg/Sun.jpg';
import Moon from './PlanetsImg/Moon.jpg';

function Planets() {
   
   const Planets = [
        {
            photo:Sun,
            val: "Sun"
        },
        {
            photo:Moon,
            val: "Moon"
        },
        {
            photo:Mercury,
            val: "Mercury"
        },
        {
            photo:Venus,
            val: "Venus"
        },
        {
            photo:Earth,
            val: "Earth"
        },
        {
            photo:Mars,
            val: "Mars"
        },
        {
            photo:Jupiter,
            val: "Jupiter"
        },
        {
            photo:Saturn,
            val: "Saturn"
        },
        {
            photo:Uranus,
            val: "Uranus"
        },
        {
            photo:Neptune,
            val: "Neptune"
        },
        {
            photo:Pluto,
            val: "Pluto"
        },
    ];

  return (
    <div >  
    <Row>   
     {
        Planets.map((variant, idx) => (
        <Col md="3" key={idx} className="media-col text-center"> 
        <Card className="mb-3 card-style" style={{width:'250',height:'250'}}>             
            <Card.Body style={{padding:'1rem'}}>
            <Card.Title>
               <Image src={variant.photo} alt={variant.val} roundedCircle style={{padding:'1rem',width:'200px'}} />
               <br/>                                
               {variant.val}
            </Card.Title>                     
            </Card.Body>
        </Card> 
        </Col>
        ))
     }
    </Row> 
    </div>
  );
}

export default Planets;