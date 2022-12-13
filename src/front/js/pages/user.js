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
    getTitles();
  });

  const getTitles = () => {
    var titles = store.savedData;
    var newArr = [];
    titles.forEach((element, index, arr) => {
      element.forEach((element2, index2, arr2) => {
        for (const property in element2) {
          newArr.push(element[1]);
          // console.log(`${property}: ${element2[property]}`);
        }
        // newArr.push(element[1]);
      });
      // newArr.push(element[1]);
    });

    console.log("these are titles: ", titles);
    console.log("these are closer to the title: ", newArr);
  };

  return (
    <div className="user text-center" style={{ marginTop: "5%" }}>
      <h1>Hi {store.firstName}, Welcome to your personal WordSword Page!</h1>
      <div className="container" style={{ marginTop: "5%", height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-3 container-fluid">
            {/* {store.savedData.map((item, index) => {
              return (
                <div className="text-dark" id={index}>
                  {item}
                </div>
              );
            })} */}
          </div>
          <div className="col-9 container-fluid">
            <OutputCard></OutputCard>
          </div>
        </div>
      </div>
    </div>
  );
};
