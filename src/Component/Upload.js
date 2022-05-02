// import React from "react";
// import "./Upload.css";

// const Upload = () => {
//   return (
//     <>
//       <div className="container">
//         <h1>Cheque parsing made easy, Just one click, Try now</h1>
//       </div>
//       <div className="input">
//         <input type="file"></input>
//       </div>
//       <div className="list">
//         <a href="#">
//           <span class="listHeader">Download API</span>
//         </a>

//         <a href="#">
//           <span class="listHeader">API Documentation</span>
//         </a>
//         <a href="#">
//           <span class="listHeader">API Plans & Pricing</span>
//         </a>
//         <a href="#">
//           <span class="listHeader">Components and Cheque</span>
//         </a>
//         <a href="#">
//           <span class="listHeader">Best Practices</span>
//         </a>
//       </div>
//     </>
//   );
// };

// export default Upload;

import { Button } from "@mui/material";
import React from "react";
import "./Upload.css";

const Upload = () => {
  return (
    <>
      <div class="split left">
        <div className="container">
          <h1>Cheque parsing made easy, Just one click, Try now</h1>
        </div>
        <div className="input">
          <input type="file"></input>
        </div>
        <div className="list">
          <a href="#">
            <span class="listHeader">Download API</span>
          </a>
          <a href="#">
            <span class="listHeader">API Documentation</span>
          </a>
          <a href="#">
            <span class="listHeader">API Plans & Pricing</span>
          </a>
          <a href="#">
            <span class="listHeader">Components and Cheque</span>
          </a>
          <a href="#">
            <span class="listHeader">Best Practices</span>
          </a>
        </div>
      </div>

      <div class="split right">
        <div className="cheque">
          <h1>Cheque</h1>
          <p>Cheque Details</p>
        </div>
        <div className="output">
          <a href="#">
            <h1>Json Output</h1>
            <p></p>
          </a>
        </div>
        <div className="button">
          <Button
            id="btn"
            variant="outlined"
            sx={{
              boxShadow: 5,
            }}
          >
            Call Andy for Support
          </Button>
        </div>
      </div>
    </>
  );
};

export default Upload;
