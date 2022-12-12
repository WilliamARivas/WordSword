import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/WordSword.png";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Output = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center">
       {
        //conditionally render if user  is verfied
        !store.verifiedUser ? (
          <p>
            Still dont have a WordSword account to save your work?{" "}
            <Link to="/create">Click here </Link>
            to get set up!
          </p>
        ) : (
          <></> //add link to lead them to personal page
        )
      }
      <h1>Your Condensed Text:</h1>
    </div>
  );
};
