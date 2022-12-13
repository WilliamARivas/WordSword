import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Home } from "./home";
import { OutputCard } from "../component/outputCard";

export const User = (props) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    !store.verifiedUser ? navigate("/login") : <></>;
    console.log(store.displayText);
  });

  return (
    <div className="user text-center" style={{ marginTop: "5%" }}>
      <h1>Hi {store.firstName}, Welcome to your personal WordSword Page!</h1>
      <div className="container" style={{ marginTop: "5%", height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-3 container-fluid">
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
          <div className="col-9 container-fluid">
            <OutputCard></OutputCard>
          </div>
        </div>
      </div>
    </div>
  );
};
