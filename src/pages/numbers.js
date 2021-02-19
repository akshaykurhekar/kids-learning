/* eslint-disable no-mixed-operators */
import {Container,Jumbotron,Card,Row,Col,Accordion} from 'react-bootstrap';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import './about.css';

function Numbers() {

    const arr = x => Array.from(x);
    const num = x => Number(x) || 0;
    
    const isEmpty = xs => xs.length === 0;
    const take = n => xs => xs.slice(0,n);
    const drop = n => xs => xs.slice(n);
    const reverse = xs => xs.slice(0).reverse();
    const comp = f => g => x => f (g (x));
    const not = x => !x;
    const chunk = n => xs =>
      isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];
    
    // numToWords :: (Number a, String a) => a -> String
    let numToWords = n => {
      
      let a = [
        '', 'One', 'Two', 'Three', 'Four',
        'Five', 'Six', 'Seven', 'Eight', 'Nine',
        'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
        'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
      ];
      
      let b = [
        '', '', 'Twenty', 'Thirty', 'Forty',
        'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
      ];
      
      let g = [
        '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion',
        'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion'
      ];
      
      // this part is really nasty still
      // it might edit this again later to show how Monoids could fix this up
      let makeGroup = ([ones,tens,huns]) => {
        return [
          num(huns) === 0 ? '' : a[huns] + ' hundred ',
          num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
          a[tens+ones] || a[ones]
        ].join('');
    };
      
      let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
      
      if (typeof n === 'number')
        return numToWords(String(n));
      else if (n === '0')
        return 'zero';
      else
        return comp (chunk(3)) (reverse) (arr(n))
          .map(makeGroup)
          .map(thousand)
          .filter(comp(not)(isEmpty))
          .reverse()
          .join(' ');
    };
     
  return (
    <div>    
        <Navbar/>
        
        <br/>        
<Container>
         
<Card className="mb-3 card-style">
        <Card.Body>        
    <Row>
    {[...Array(11)].map((x, i) =>
          <Col md="2" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i}</Card.Title>
              <Card.Text>
                   {numToWords(i)} 
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
    </Card.Body>
    </Card>
    
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      11 to 30
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <Row>
    {[...Array(20)].map((x, i) =>
          <Col md="2" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i+11}</Card.Title>
              <Card.Text>
                   {numToWords(i+11)} 
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      31 to 60
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <Row>
    {[...Array(30)].map((x, i) =>
          <Col md="2" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'1rem'}}>
              <Card.Title>{i+31}</Card.Title>
              <Card.Text>
                   {numToWords(i+31)} 
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
      61 to 100
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <Row>
    {[...Array(40)].map((x, i) =>
          <Col md="2" key={i} className="media-col" >
          <Card className="mb-3 card-style">
           
            <Card.Body style={{padding:'0.5rem'}}>
              <Card.Title>{i+61}</Card.Title>
              <Card.Text>
                   {numToWords(i+61)} 
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        )}
    </Row>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
 
</Container>
    <Footer/>        
    </div>
  );
}

export default Numbers;
