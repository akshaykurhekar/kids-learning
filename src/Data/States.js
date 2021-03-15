import {Row,Col,Image,Card} from 'react-bootstrap';

import Amaravati from './StatesImg/Amaravati.jpg';
import Itanagar from './StatesImg/Itanagar.jpg';
import Dispur from './StatesImg/Dispur.jpg';
import Patna from './StatesImg/Patna.jpg';
import Rajpur from './StatesImg/Rajpur.jpg';
import Panaji from './StatesImg/Panaji.jpg';
import Gandhinagar from './StatesImg/Gandhinagar.jpg';
import Chandigarh from './StatesImg/Chandigarh.jpg';
import Shimla from './StatesImg/Shimla.jpg';
import Ranchi from './StatesImg/Ranchi.jpg';
import Bangalore from './StatesImg/Bangalore.jpg';
import Thiruvananthapuram from './StatesImg/Thiruvananthapuram.jpg';
import Bhopal from './StatesImg/Bhopal.jpg';
import Mumbai from './StatesImg/Mumbai.jpg';
import Imphal from './StatesImg/Imphal.jpg';
import Shillong from './StatesImg/Shillong.jpg';
import Aizawl from './StatesImg/Aizawl.jpg';
import Kohima from './StatesImg/Kohima.jpg';
import Bhubaneshwar from './StatesImg/Bhubaneshwar.jpg';
import Jaipur from './StatesImg/Jaipur.jpg';
import Gangtok from './StatesImg/Gangtok.jpg';
import Chennai from './StatesImg/Chennai.jpg';
import Hyderabad from './StatesImg/Hyderabad.jpg';
import Agartala from './StatesImg/Agartala.jpg';
import Dehradun from './StatesImg/Dehradun.jpg';
import Lucknow from './StatesImg/Lucknow.jpg';
import Kolkata from './StatesImg/Kolkata.jpg';

import Speech from "../pages/Speech/Speech";
import './States.css';

function States() {
   
   const Data = [
    {
        photo:Amaravati,
        state:"Andhra Pradesh",
        capital:"Amaravati"
    },
    {
        photo:Itanagar,
        state:"Arunachal Pradesh",
        capital:"Itanagar"
    },
    {
        photo:Dispur,
        state:"Assam",
        capital:"Dispur"
    },
    {
        photo:Patna,
        state:"Bihar",
        capital:"Patna"
    },
    {
        photo:Rajpur,
        state:"Chhattisgarh",
        capital:"Rajpur"},
    {
        photo:Panaji,
        state:"Goa",
        capital:"Panaji"},
    {
        photo:Gandhinagar,
        state:"Gujarat",
        capital:"Gandhinagar"},
    {
        photo:Chandigarh,
        state:"Haryana",
        capital:"Chandigarh"
    },
    {
        photo:Shimla,
        state:"Himachal Pradesh",
        capital:"Shimla"},
    {
        photo:Ranchi,
        state:"Jharkhand",
        capital:"Ranchi"},
    {
        photo:Bangalore,
        state:"Karnataka",
        capital:"Bangalore"},
    {
        photo:Thiruvananthapuram,
        state:"Kerala",
        capital:"Thiruvananthapuram"},
    {
        photo:Bhopal,
        state:"Madhya Pradesh",
        capital:"Bhopal"},
    {
        photo:Mumbai,
        state:"Maharashtra",
        capital:"Mumbai"},
    {
        photo:Imphal,
        state:"Manipur",
        capital:"Imphal"},
    {
        photo:Shillong,
        state:"Meghalaya",
        capital:"Shillong"},
    {
        photo:Aizawl,
        state:"Mizoram",
        capital:"Aizawl"},
    {
        photo:Kohima,
        state:"Nagaland",
        capital:"Kohima"},
    {
        photo:Bhubaneshwar,
        state:"Odisha",
        capital:"Bhubaneshwar"},
    {
        photo:Chandigarh,
        state:"Punjab",
        capital:"Chandigarh"},
    {
        photo:Jaipur,
        state:"Rajasthan",
        capital:"Jaipur"},
    {
        photo:Gangtok,
        state:"Sikkim",
        capital:"Gangtok"
    },
    {
        photo:Chennai,
        state:"Tamil Nadu",
        capital:"Chennai"
    },
    {
        photo:Hyderabad,
        state:"Telangana",
        capital:"Hyderabad"
    },
    {
        photo:Agartala,
        state:"Tripura",
        capital:"Agartala"
    },
    {
        photo:Dehradun,
        state:"Uttarakhand",
        capital:"Dehradun"
    },
    {
        photo:Lucknow,
        state:"Uttar Pradesh",
        capital:"Lucknow"
    },
    {
        photo:Kolkata,
        state:"West Bengal",
        capital:"Kolkata"
    } ];

  return (
    <div >  
        <h2 className="heading1">States and Capitals</h2>
        <br/>
    <Row>   
     {
        Data.map((variant, idx) => (
        <Col md="4" key={idx} className="media-col text-center"> 
        
        <Card className="mb-3 card-style">             
            <Card.Body>
            <Speech text={variant.state}>
            <p className="Title">                   
               {idx+1}. {variant.state}
            </p>
            </Speech>
            <Image src={variant.photo} alt={variant.val} rounded style={{width:'250px'}} />                     
            <Speech text={variant.capital}><p className="subTitle">{variant.capital}</p></Speech> 
            </Card.Body>
        </Card> 
        </Col>
        ))
     }
    </Row> 
    </div>
  );
}

export default States;