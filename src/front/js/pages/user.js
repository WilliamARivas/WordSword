import React, { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Home } from "./home";

export const User = (props) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    !store.verifiedUser ? navigate("/login") : <></>;
  });

  return (
    <div className="user text-center" style={{ marginTop: "5%" }}>
      <h1>Hi {store.firstName}, Welcome to your personal WordSword Page!</h1>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
            <div className="col">
              {/* <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
