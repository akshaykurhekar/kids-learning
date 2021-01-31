import {React,useState,useEffect} from 'react';
// import Data from '../Data/data.json';
import {Container,Jumbotron,Tabs,Tab,Card,Row,Col,Image} from 'react-bootstrap';
import Navbar from '../component/navbar';
import './alphabets.css';
import Test from './AkshayMK1.jpg';

function Numbers() {

      const Data = [
            
                       {
                        "val":"A",
                        "url":"Apple",
                        "src":Test
                    },
                    {
                        "val":"B",
                        "url":"boll",
                        "src":Test
                    },
                    {
                        "val":"C",
                        "url":"./A.png",
                        "src":Test
                    },
                    {
                        "val":"D",
                        "url":"./A.png",
                        "src":Test
                    }
        ]
        // const [dataList,setList] = useState([Data]);

        // useEffect(()=>{
        //             setList(Data);           
        // },[]);

    console.log(Data);

  return (
    <div className="alphabets">    
        <Navbar/>
        <br/>        
<Container>
    <Row>
        
        {
        Data.map((variant, idx) => (
            <Col md="4" key={idx} >
            <Card
            className="mb-2 card"
            //   bg={variant.toLowerCase()}
              
            //   text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              
            >
             
              <Card.Body>
                <Card.Title>{variant.val} {variant.url} </Card.Title>
                <Card.Text>
                  <Image src={variant.src} alt="test.." width="100" />
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          ))
    }    
        
    </Row>

 
</Container>

    </div>
  );
}

export default Numbers;
