import {React,useState,useEffect} from 'react';
// import Data from '../Data/data.json';
import {Container,Jumbotron,Tabs,Tab} from 'react-bootstrap';
import Navbar from '../component/navbar';
import './alphabets.css';

function Numbers() {

      const Data = [
            
                       {
                        "val":"A",
                        "url":"./A.png"
                    },
                    {
                        "val":"B",
                        "url":"./A.png"
                    },
                    {
                        "val":"C",
                        "url":"./A.png"
                    },
                    {
                        "val":"D",
                        "url":"./A.png"
                    }
        ]
        const [dataList,setList] = useState([Data]);

        useEffect(()=>{
                    setList(Data);           
        },[]);

    console.log(Data);

  return (
    <div className="alphabets">    
        <Navbar/>
        <br/>        
<Container>
   
 <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Jumbotron className="bg-light"> 
    <br/>
    <h1>404 error page not found 😥</h1>
    {
        dataList.map(item => {
            return <h1 key>{item.val}</h1>
        })
    }               
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
