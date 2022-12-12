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

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center">
        <h1>OUTPUT PAGE</h1>
      </div>
      <div>
        {store.displayText.map((item, index) => {
          return (
            <span className="flashyText" id={index} onClick={handleTextClick}>
              {item}
            </span>
          );
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center">
        <span>:Save Word Sword Text:</span>
        <span>:Save Highlighted Text:</span>
      </div>
    </div>
  );
};
