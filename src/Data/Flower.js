import {Row,Col,Image,Card} from 'react-bootstrap';

import Tulip from './FlowerImg/Tulip.jpg';
import Daffodil from './FlowerImg/Daffodil.jpg';
import Poppy from './FlowerImg/Poppy.jpg';
import Sunflower from './FlowerImg/Sunflower.jpg';
import Bluebell from './FlowerImg/Bluebell.jpg';
import Rose from './FlowerImg/Rose.jpg';
import Snowdrop from './FlowerImg/Snowdrop.jpg';
import CherryBlossom from './FlowerImg/CherryBlossom.jpg';
import Orchid from './FlowerImg/Orchid.jpg';
import Iris from './FlowerImg/Iris.jpg';
import Peony from './FlowerImg/Peony.jpg';
import Chrysanthemum from './FlowerImg/Chrysanthemum.jpg';
import Geranium from './FlowerImg/Geranium.jpg';
import Lily from './FlowerImg/Lily.jpg';
import Lotus from './FlowerImg/Lotus.jpg';
import WaterLily from './FlowerImg/WaterLily.jpg';
import Dandelion from './FlowerImg/Dandelion.jpg';
import Hyacinth from './FlowerImg/Hyacinth.jpg';
import Daisy from './FlowerImg/Daisy.jpg';
import Crocus from './FlowerImg/Crocus.jpg';

function Flowers() {
   
   const Flowers = [
    {
        photo:Tulip,
        val:"Tulip"
    },
    {
        photo:Daffodil,
        val:"Daffodil"
    },
    {
        photo:Poppy,
        val:"Poppy"},
    {
        photo:Sunflower,
        val:"Sunflower"},
    {
        photo:Bluebell,
        val:"Bluebell"},
    {
        photo:Rose,
        val:"Rose"},
    {
        photo:Snowdrop,
        val:"Snowdrop"},
    {
        photo:CherryBlossom,
        val:"Cherry Blossom"},
    {
        photo:Orchid,
        val:"Orchid"},
    {
        photo:Iris,
        val:"Iris"},
    {
        photo:Peony,
        val:"Peony"},
    {
        photo:Chrysanthemum,
        val:"Chrysanthemum"},
    {
        photo:Geranium,
        val:"Geranium"},
    {
        photo:Lily,
        val:"Lily"},
    {
        photo:Lotus,
        val:"Lotus"},
    {
        photo:WaterLily,
        val:"Water Lily"},
    {
        photo:Dandelion,
        val:"Dandelion"},
    {
        photo:Hyacinth,
        val:"Hyacinth"},
    {
        photo:Daisy,
        val:"Daisy"},
    {
        photo:Crocus,
        val:"Crocus"}
    ];

  return (
    <div >  
    <Row>   
     {
        Flowers.map((variant, idx) => (
        <Col md="3" key={idx} className="media-col text-center"> 
        <Card className="mb-3 card-style" style={{width:'250',height:'250'}}>             
            <Card.Body style={{padding:'1rem'}}>
            <Card.Title>
               <Image src={variant.photo} alt={variant.val} rounded style={{padding:'1rem',width:'200px'}} />
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

export default Flowers;