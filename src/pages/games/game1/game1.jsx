import React, { useEffect, useState } from "react";

import Timer from "./timer/Timer";

import "./game1.css";
import { Row, Col,Button } from "react-bootstrap";
//import { Button } from "@material-ui/core";

const Game1 = () => {

  const  [question,setQuestion] = useState();
  const  [answer,setAnswer] = useState();
  const  [option1,setOption1] = useState();
  const  [option2,setOption2] = useState();
  const  [option3,setOption3] = useState();
  const  [option4,setOption4] = useState();

  const  [variantOp1, setVariantOp1] = useState('outline-primary');
  const  [variantOp2, setVariantOp2] = useState('outline-primary');
  const  [variantOp3, setVariantOp3] = useState('outline-primary');
  const  [variantOp4, setVariantOp4] = useState('outline-primary');
    
  const  [nextButtonEnable, setNextButtonEnable] = useState(false);
  const  [ButtonEnable, setButtonEnable] = useState(false);

  const  [totalQuestionCount, setTotalQuestionCount] = useState(0);
  const  [correctQuestionCount, setCorrectQuestionCount] = useState(0);
  const  [timeRemain, setTimeRemain] = useState(true);


    useEffect(()=>{
        createQuestion();
    },[])

   
    const createQuestion = () =>{
        let op1= Math.floor(Math.random() * 10+10);
        let op2 = Math.floor(Math.random() * 10+8);
        
        setTotalQuestionCount(totalQuestionCount + 1);
        const d = new Date();
        let seconds = d.getSeconds();

        if(seconds < 10){
            let ar = '*';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1*op2;
            setAnswer(ans);
            setOption1(ans);        
            setOption2(ans-3);        
            setOption3(ans + 2);        
            setOption4(ans+5);
        }else if( 10 > seconds && seconds < 20){
            let ar = '+';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1+op2;
            setAnswer(ans);
            setOption1(ans);        
            setOption2(ans+5);        
            setOption3(ans + 2);        
            setOption4(ans+7);
        }else if( 21 > seconds && seconds < 30){
            let ar = '-';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1-op2;
            setAnswer(ans);
            setOption1(ans+8);        
            setOption2(ans+5);        
            setOption3(ans + 2);        
            setOption4(ans);
        }else if( 31 > seconds && seconds < 40){
            let ar = '/';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1/op2;
            setAnswer(ans);
            setOption1(ans);        
            setOption2(ans+5);        
            setOption3(ans + 2);        
            setOption4(ans+3);
        }else if( 40 > seconds && seconds < 50){
            let ar = '-';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1-op2;
            setAnswer(ans);
            setOption1(ans-4);        
            setOption2(ans);        
            setOption3(ans + 2);        
            setOption4(ans+6);
        }
        else if( 50 > seconds && seconds < 55){
            let ar = '*';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1*op2;
            setAnswer(ans);
            setOption1(ans-4);        
            setOption2(ans+5);        
            setOption3(ans + 2);        
            setOption4(ans);
        }
        else {
            let ar = '+';
            setQuestion(op1+' '+ ar +' '+op2);
            const ans = op1+op2;
            setAnswer(ans);
            setOption1(ans+7);        
            setOption2(ans);        
            setOption3(ans+5);        
            setOption4(ans+3);
        }


        setNextButtonEnable(false); 
        setButtonEnable(false);

        setVariantOp1('outline-primary');
        setVariantOp2('outline-primary');
        setVariantOp3('outline-primary');
        setVariantOp4('outline-primary');
      
    }

    const checkAnswer = (ans,option)=>{
       
            if(option === 'option1'){
                if(ans === answer){
                    setCorrectQuestionCount( correctQuestionCount +1);
                    setVariantOp1('outline-success');
                }else{
                    setVariantOp1('outline-danger');
                }
            }else  if(option === 'option2'){
                
                    if(ans === answer){
                        setCorrectQuestionCount( correctQuestionCount +1);
                     setVariantOp2('outline-success');
                    }else{
                        setVariantOp2('outline-danger');
                    }
            }else  if(option === 'option3'){
                
                    if(ans === answer){
                        setCorrectQuestionCount( correctQuestionCount +1);
                    setVariantOp3('outline-success');
                    }else{
                        setVariantOp3('outline-danger');
                    }
            }else  if(option === 'option4'){
                
                    if(ans === answer){
                        setCorrectQuestionCount( correctQuestionCount +1);
                    setVariantOp4('outline-success');
                    }else{
                        setVariantOp4('outline-danger');
                    }
            }
        
        setButtonEnable(true);
        setNextButtonEnable(true);
    }
  
  return (
    <div>
      <Row>
        <Col className="sm-col-4 sm-hide">
          <h1>Game 1 Lets Start</h1>
    
        </Col>
        <Col className="sm-col-4">
            <Timer setTimeRemain={setTimeRemain} />      
        </Col>
      </Row>
      <div className="justify-content-md-left p-md-5 p-lg-5 p-sm-2">      
      { timeRemain ?
      (<div className="jumbotron">
        <div className=" mb-2">Q. {question} = _________ </div>
        <Row>
          <Col xs={12} md={6} className="p-2">
          A) <Button disabled={ButtonEnable} variant={variantOp1} onClick={()=>checkAnswer(option1,'option1')}>
          {option1}
          </Button>
          {/* <Button className=" bg-green"> a) {option1} </Button> */}
          </Col>
          <Col xs={12} md={6} className="p-2 ">
           B) <Button disabled={ButtonEnable} variant={variantOp2} onClick={()=>checkAnswer(option2,'option2')}>
            {option2}   
            </Button>
          </Col>
          <Col xs={12} md={6} className="p-2">
          C) <Button className="bold" disabled={ButtonEnable} variant={variantOp3} onClick={()=>checkAnswer(option3, 'option3')}>
            {option3}   
            </Button>
          </Col>
          <Col xs={12} md={6} className="p-2 ">
          D) <Button className="bold" variant={variantOp4} disabled={ButtonEnable} onClick={()=>checkAnswer(option4,'option4')}>
            {option4}   
            </Button>
          </Col>
        </Row>
       <div style={{marginLeft:'40px'}}>
       { nextButtonEnable ? (
        <Button variant="warning" onClick={()=>createQuestion()}>
            Next
            </Button>) : null
            }        
        </div> 
      </div>) : (
          <div>
              <h2>Score : { (correctQuestionCount / totalQuestionCount)*100 } {' %'}</h2>
          </div>
      )
      }

      </div>
    </div>
  );
};

export default Game1;
