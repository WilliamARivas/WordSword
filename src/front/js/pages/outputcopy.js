import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/WordSword.png";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const OutputCopy = () => {
  const { store, actions } = useContext(Context);

  //initiating navigate
  const navigate = useNavigate();

  const handleTextClick = (event) => {
    event.target.style.backgroundColor = "rgb(255,255,0)";
  };
  //two clicks should change it back

  return (
    <div className="container py-4 bg-light h-75">
      <div className="d-flex justify-content-center">
        <h2>Key Terms:</h2>
        <div>
          <p>The following terms appeared most frequently in your text.</p>
          {Object.keys(store.keyTerms).map(function (key, index) {
            return (
              <span className="text-dark" id={index}>
                <br></br>
                {key} : {store.keyTerms[key]} times
                <br></br>
              </span>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <h1>Your Condensed Text:</h1>
      </div>
      <div>
        {store.displayText.map((item, index) => {
          return (
            <span
              className="flashyText text-dark"
              id={index}
              onClick={handleTextClick}
            >
              &emsp;{item}
              <br></br>
            </span>
          );
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-center">
        {
          //conditionally render if user  is verfied
          !store.verifiedUser ? (
            <p>
              Still don't have a WordSword account to save your work?{" "}
              <Link to="/create">Click here </Link>
              to get set up!
            </p>
          ) : (
            <>
              <Link to="/user">Save Text To Personal Library</Link>
            </> //add link to lead them to personal page
          )
        }
      </div>
      <div className="d-flex justify-content-center">
        <span>:Save Word Sword Text:</span>
        <span>:Save Highlighted Text:</span>
      </div>
    </div>
  );
};
