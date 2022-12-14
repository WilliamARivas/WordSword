import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Donate = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="donate w-75 text-center"
      style={{ marginLeft: "12%", marginTop: "5%" }}
    >
      <br></br>
      <h1>
        <u>
          <b>Donate today!</b>
        </u>
      </h1>
      <p>Support the webdevs who made WordSword possible.</p>
      <br></br>
      <div className="container-donate">
        <div className="col">
          <p>
            Are you using WordSword and totally loving it? We sure hope you are!
            Our team has put so many hours into this unique and technical
            software for our own reading needs. However, once we realized how
            truly helpful WordSword was, we absolutly could not gatekeep this
            from the rest of the world! So we made WordSword totally accessible
            so that everybody can have access to a piece of our special pie!
          </p>
          <p>Because we made WordSword free, we gladly accept any donations!</p>
        </div>
      </div>
      <p>
        <b>Select donation amount below</b>
      </p>
      <div className="row row-cols-lg-5">
        <div className="col">
          <button type="button" className="btn-donate btn-success btn-default">
            $5
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn-donate btn-success btn-default">
            $15
          </button>
        </div>{" "}
        <div className="col">
          <button type="button" className="btn-donate btn-success btn-default">
            $25
          </button>
        </div>{" "}
        <div className="col">
          <button type="button" className="btn-donate btn-success btn-default">
            $50
          </button>
        </div>{" "}
        <div className="col">
          <button type="button" className="btn-donate btn-success btn-default">
            $100
          </button>
        </div>
      </div>
    </div>
  );
};

// row-cols-2
// g-2
