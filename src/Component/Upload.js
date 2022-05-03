import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 180,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const Upload = () => {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () =>
      ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
      }[(isDragActive, isDragReject)])
  );

  const sourceImages = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <>
      <div class="split left">
        <div className="container">
          <h2>Cheque parsing made easy, Just one click, Try now</h2>
        </div>
        <div className="input">
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <div className="drag-div">
              <CloudUploadIcon
                className="icon"
                style={{
                  fontSize: "100px",
                }}
              />
              <Button
                type="button"
                onClick={open}
                variant="outlined"
                id="btn"
                sx={{
                  boxShadow: 5,
                  width: 400,
                  height: 50,
                }}
              >
                Choose files to upload
              </Button>
              <p id="pTag">Or Drag and Drop them here</p>
            </div>
          </div>
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
          <p style={thumbsContainer}>{sourceImages}</p>
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
