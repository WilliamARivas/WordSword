import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const About = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="text-center w-75"
      style={{ marginLeft: "12%", marginTop: "5%" }}
    >
      <h1>About Us</h1>
      <div class="width80">
        <div class="divider" />
      </div>
      <br></br>
      <p>Placeholder for project story</p>
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ marginTop: "3%" }}
      >
        <div className="col">
          <div className="card h-100 shadow-lg">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body rounded-3">
              <h5 className="card-title">Faith Ward</h5>
              <p className="card-text">
                Senior Full stack coder. Capable of creating the smoothest
                algorithms!
              </p>
              <a
                class="btn btn-outline-primary"
                href="https://www.linkedin.com/in/faithwardtech/"
                role="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-lg">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">William Rivas</h5>
              <p className="card-text">
                Master software developer with years of experience and the most
                technical debugger.
              </p>
              <a
                class="btn btn-outline-primary"
                href="https://www.linkedin.com/in/williamarivas/"
                role="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 shadow-lg">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Janeshka Folch</h5>
              <p className="card-text">Junior software developer.</p>
              <a
                class="btn btn-outline-primary"
                href="https://www.linkedin.com/in/janeshka-folch-37a77b1b5/"
                role="button"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
