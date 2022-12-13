import React, { Component } from "react";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const outputCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div class="card w-50">
      <div class="card-body">
        <a href="#" class="btn btn-dark position-absolute top-10 start-90">
          Button
        </a>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
};
