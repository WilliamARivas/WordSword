import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/WordSwordnew.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");

const axios = require("axios");
//var formidable = require('formidable');
//var fs = require('fs');

export const Home = () => {
  const { store, actions } = useContext(Context);

  //variable for the text box that the user pastes in for our algorithm
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  //initiating navigate
  const navigate = useNavigate();

  const handleSplice = (event) => {
    event.preventDefault();
    actions.handlePaste(text);
    //console.log(store.textArray);
    actions.findKeyTerms();
    actions.displayKeyTerms();
    actions.sliceText();
    actions.readDisplay();
    //window.location.href="/output"
    navigate("/output");
  };

  //below is code specifically for handling file inputs after they have been read as text
  //does not need event prevent default, needs to receive text
  const handleFileSplice = (newFile) => {
    actions.handlePaste(newFile);
    //console.log(store.textArray);
    actions.findKeyTerms();
    actions.displayKeyTerms();
    actions.sliceText();
    actions.readDisplay();
    //window.location.href="/output"
    navigate("/output");
  };

  const handlePDFdata = (event) => {
    var file = event.target.files[0];

    //Read the file using file reader
    var fileReader = new FileReader();
    fileReader.onload = function () {
      //turn array buffer into typed array
      var typedarray = new Uint8Array(this.result);
      //pdfjs should be able to read this
      const loadingTask = pdfjsLib.getDocument(typedarray);
      loadingTask.promise
        .then(function (pdf) {
          pdf.getPage(i);
        })
        .then(function (page) {
          page.getTextContent();
        })
        .then(function (textContent) {
          console.log(textContent);
        });
    };
    //Step 3:Read the file as ArrayBuffer
    fileReader.readAsArrayBuffer(file);
  };

  //creates a new FileReader() tool, says that when reader is called, it will also call handleFileSplice on its results
  const txtRead = (event) => {
    let reader = new FileReader();
    reader.onload = function () {
      handleFileSplice(reader.result);
    };
    reader.readAsText(event.target.files[0]); //e.target.files[0] contains the file no matter the format
    //here is where reader is called, so after it reads the file in as text it calls the function on the result
  };

  const pdfRead = (event) => {
    //actions.handlePDF(formData)
    let reader = new FileReader();
    reader.onload = function () {
      handleFileSplice(reader.result);
    };
    reader.readAsBinaryString(event.target.files[0]);
  };

  return (
    <div className="home text-center">
      <div className="mainpage logo py-4 bg-light" style={{ marginBottom: 50 }}>
        <img src={logoImageUrl} className="homeLogo" />
        <h2>Reading through alot of text can be HARD!</h2>
        <h3>
          {" "}
          Thankfully, WordSword takes long text documents or pdfs and runs them
          through our algorithm to isolate the most important parts and convert
          them into a more concise file!
        </h3>
      </div>

      {!store.verifiedUser ? (
        <p>
          Still dont have a WordSword account to save your work?{" "}
          <Link to="/create">Click here </Link>
          to get set up!
        </p>
      ) : (
        <></>
      )}
      <div className="form" type="form">
        {/* <div className="form button" style={{ marginBottom: 20 }}> */}
        <label htmlFor="inputFile">Choose a file:</label>
        <input
          type="file"
          id="inputFile"
          name="inputFile"
          accept=".txt, .pdf"
          onChange={(e) => {
            if (e.target.files[0].type == "text/plain") {
              txtRead(e);
            } else if (e.target.files[0].type == "application/pdf") {
              //here we pass to API to convert to text
              //we will pass that text into handleFileSplice
              console.log("Took in pdf");
              handlePDFdata(e);
            }
          }}
        ></input>
        <button id="myButton">Submit</button>
      </div>
      <br></br>
      <label htmlFor="typedInput">Or copy and paste text here:</label>
      {/* </div> */}

      <textarea
        className="form-control w-50 mx-auto py-3"
        name="typedInput"
        rows="10"
        cols="60"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <textarea
        className="form-control w-50 mx-auto py-3"
        name="typedInput"
        rows="10"
        cols="60"
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <input
        className="button-submit btn btn-dark m-3"
        type="submit"
        value="Slice Text"
        onClick={handleSplice}
      ></input>
    </div>
  );
};
