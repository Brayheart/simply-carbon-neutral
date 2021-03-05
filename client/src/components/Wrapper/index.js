import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
    <>
      <h6 className="wrapper"><i>Questions for the Past Week</i></h6>
      <div className="wrapper">
        {props.children}
      </div>
    </>
  )
}

export default Wrapper;
