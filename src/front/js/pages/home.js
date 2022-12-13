import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/WordSwordnew.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

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
    navigate("/outputcopy");
  };

  const handleFileSplice = (newFile) => {
    actions.handlePaste(newFile);
    //console.log(store.textArray);
    actions.findKeyTerms();
    actions.displayKeyTerms();
    actions.sliceText();
    actions.readDisplay();
    //window.location.href="/output"
    navigate("/outputcopy");
  }

  // document.getElementById("myButton").addEventListener("click", function() {

  //   var reader = new FileReader();
  //   reader.addEventListener('load', function() {
  //     document.getElementById('inputFile').innerText = this.result;
  //   });
  //   reader.readAsText(document.querySelector('input').files[0]);
  
  // });



  return (
    <div className="home text-center">
      <div className="mainpage logo py-4 bg-light" style={{ marginBottom: 50 }}>
        <img src={logoImageUrl} className="homeLogo" />
        <h1>
          {" "}
          WordSword takes long text documents or pdfs and runs them through our
          algorithm to isolate the most important parts and convert them into a
          more concise file!
        </h1>
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
      {/* <div className="form" type="form">
        <div className="form button" style={{ marginBottom: 20 }}> */}
        {/* <form action="fileupload" method="post" encType="multipart/form-data"> */}
          <label htmlFor="inputFile">Choose a file:</label>
          <input
            type="file"
            id="inputFile"
            name="inputFile"
            accept=".txt, .pdf"
            onChange= {(e) => {
              let reader = new FileReader();
              reader.onload = function(e) {
                  handleFileSplice(reader.result)
              }
              reader.readAsText(e.target.files[0]);
            }}
          ></input>
          <button id="myButton">Submit</button>
      {/* </form> */}
          <br></br>
          <label htmlFor="typedInput">Or copy and paste text here:</label>
        {/* /</div> */}

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
        />
      </div>
   // </div>
  );
};
