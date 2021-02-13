import React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  hight:"10rem"
};

const Canvas = class extends React.Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  render() {
    return (
      <div>
          <Navbar/>
          <br/>
        <ReactSketchCanvas
          ref={this.canvas}
          strokeWidth={5} // pen width
          strokeColor="black"
          style={styles}
        />
        <button
          onClick={() => {
            this.canvas.current.exportImage("png")
              .then(data => {
                console.log(data);
              })
              .catch(e => {
                console.log(e);
              });
          }}
        >
          Get Image
        </button>
        <ReactSketchCanvas
          ref={this.canvas}
          strokeWidth={5} // pen width
          strokeColor="black"
          style={styles}
          height="50"
        />
        <Footer/>
      </div>
    );
  }
};

export default Canvas;