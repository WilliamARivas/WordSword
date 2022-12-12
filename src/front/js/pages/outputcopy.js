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
    event.target.style.backgroundColor = 'rgb(255,255,0)'
  }

  return (
    <div className="container py-4">
        {store.displayText.map((item, index) => {
          return (
              <span className="flashyText" onClick={handleTextClick}>{item}</span>
          );
        })}
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
