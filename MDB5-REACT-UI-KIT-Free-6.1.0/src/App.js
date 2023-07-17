import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Form from ".//Colorpickerform/Form";

function App() {
  return (
    <MDBContainer fluid>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Form />
      </div>
    </MDBContainer>
  );
}

export default App;
