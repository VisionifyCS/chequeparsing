import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files)
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // To avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };

  return (
    <>
      <div class="split left">
        <div className="container">
          <h1>Cheque parsing made easy, Just one click, Try now</h1>
        </div>
        <div className="input">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
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
          <p>{renderPhotos(selectedFiles)}</p>
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
