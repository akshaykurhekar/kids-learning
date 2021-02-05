import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small footer">      
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Created with love by <a href="https://www.mdbootstrap.com"> Akshay Kurhekar</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;