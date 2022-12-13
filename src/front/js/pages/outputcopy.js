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
    <div className="container py-4 bg-light">
      <div className="d-flex justify-content-center">
        <h1>Your Condensed Text:</h1>
      </div>
      <div>
        {store.displayText.map((item, index) => {
          return (
            <span className="flashyText text-dark" id={index} onClick={handleTextClick}>
              {item}
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
          <></> //add link to lead them to personal page
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
