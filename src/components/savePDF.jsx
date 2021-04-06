import React from 'react';
import Pdf from "react-to-pdf";
import Node from "./node.jsx"

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
       <Node/>
      </div>
      <Pdf targetRef={ref} filename="Mind Map.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Save as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;