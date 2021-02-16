import {React,useState,useRef} from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import {Button} from 'react-bootstrap';
import './practice.css';

function Canvas(){ 

    const canvasRef = useRef(null);
    
    const [color,setColor]=useState('#EC9418');
    const [Backcolor,setBackColor]=useState('#E5FFF7');
    const [strokeWidth,setStrokeWidth]=useState('4');
    const [eraseWidth,setEraseWidth]=useState('8');

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
    
      const clearHandler = () => {
        const clearCanvas = canvasRef.current?.clearCanvas;
    
        if (clearCanvas) {
          clearCanvas();
        }
      };
    
      const resetCanvasHandler = () => {
        const resetCanvas = canvasRef.current?.resetCanvas;
    
        if (resetCanvas) {
          resetCanvas();
        }
      };
   
    return (
      <div>
          <Navbar/>
          <div className="text-center p-3">
          Background Color <input className="m-2" type="color" value={Backcolor} onInput={(e)=>setBackColor(e.target.value) } />     
         PenColor <input type="color" className="m-2" value={color} onInput={(e)=>eventHandel(e) } />
         <Button className="btn btn-outline-success" onClick={()=>penHandler() }>✏️ Pen</Button>  
         <input type="range" min="1" max="50" value={strokeWidth} onInput={(e)=>setStrokeWidth(e.target.value) } />   
         <Button className="btn btn-outline-cyan" onClick={()=>eraserHandler() }>⬛ Eraser</Button>
         <input type="range" min="1" max="80" value={eraseWidth} onInput={(e)=>setEraseWidth(e.target.value) } />      
         <Button className="btn btn-outline-orange" onClick={()=>undoHandler() }>Undo</Button>
         <Button className="btn btn-outline-lime " onClick={()=>redoHandler() }>Redo</Button>
         <Button variant="outline-dark" className="btn btn-warning" onClick={()=>resetCanvasHandler() }>ReSet</Button>
         <Button variant="outline-danger" onClick={()=>clearHandler() }>Clear Bored</Button>
           
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