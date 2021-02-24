import {React,useState,useRef} from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar1 from '../component/navbar';
import Footer from '../component/footer';
import {Button, Nav , Navbar} from 'react-bootstrap';
import './practice.css';

function Canvas(){ 

    const canvasRef = useRef(null);
    
    const [color,setColor]=useState('#EC9418');
    const [Backcolor,setBackColor]=useState('#E5FFF7');
    const [strokeWidth,setStrokeWidth]=useState('4');
    const [eraseWidth,setEraseWidth]=useState(35);

    const eventHandel=(e)=>{
        setColor(e.target.value);
    }
    // =========== 
    const penHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;
    
        if (eraseMode) {
          eraseMode(false);
        }
      };
    
      const eraserHandler = () => {
        const eraseMode = canvasRef.current?.eraseMode;
    
        if (eraseMode) {
          eraseMode(true);
        }
      };
      const undoHandler = () => {
        const undo = canvasRef.current?.undo;
    
        if (undo) {
          undo();
        }
      };
    
      const redoHandler = () => {
        const redo = canvasRef.current?.redo;
    
        if (redo) {
          redo();
        }
      };
    
      const resetCanvasHandler = () => {
        const resetCanvas = canvasRef.current?.resetCanvas;
    
        if (resetCanvas) {
          resetCanvas();
        }
      };

     const eraseWidthHandler = (e) =>{
        setEraseWidth(e.target.value);
        const eraseMode = canvasRef.current?.eraseMode;
    
        if (eraseMode) {
          eraseMode(true);
        }           
     }

     const penWidthHandler = (e) =>{
        setStrokeWidth(e.target.value);
        const eraseMode = canvasRef.current?.eraseMode;
    
        if (eraseMode) {
          eraseMode(false);
        }           
    }
       
    return (
      <div>
          <Navbar1/>
          <div className="Navbar">
    <Navbar expand="lg">
    <div className="media">
        <Button className="btn btn-outline-success" onClick={()=>penHandler() }>✏️ Pen</Button>
        <Button className="btn btn-outline-cyan" onClick={()=>eraserHandler() }>Eraser</Button>
    </div>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
       
        <div className="text-center p-3 ">
          
          Board Color <input className="m-2" type="color" value={Backcolor} onInput={(e)=>setBackColor(e.target.value) } />     
         PenColor <input type="color" className="m-2" value={color} onInput={(e)=>eventHandel(e) } />
         <Button className="btn btn-outline-success" onClick={()=>penHandler() }>✏️ Pen</Button>  
         <input type="range" min="1" max="50" value={strokeWidth} onInput={(e)=>penWidthHandler(e) } /> 
         <Button className="btn btn-outline-cyan" onClick={()=>eraserHandler() }>⬛ Eraser</Button>
         <input type="range" min="1" max="80" value={eraseWidth} onInput={(e)=> eraseWidthHandler(e)} />      
         <Button className="btn btn-outline-orange" onClick={()=>undoHandler() }>Undo</Button>
         <Button className="btn btn-outline-lime " onClick={()=>redoHandler() }>Redo</Button>
         <Button variant="outline-danger" onClick={()=>resetCanvasHandler() }>Reset</Button>
           
         </div>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
    </div>
                  
        <ReactSketchCanvas
          ref={canvasRef}
          width="100em" height="40rem"
          strokeWidth={strokeWidth}
          strokeColor={color}
          canvasColor={Backcolor}        
          eraserWidth={eraseWidth}         
        />              
        <Footer/>
      </div>
    );
  }

export default Canvas;