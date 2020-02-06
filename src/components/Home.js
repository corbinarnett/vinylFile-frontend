import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Jumbotron className="text-center" style={{ backgroundColor: "white" }}>
        <h1>vinylFile.</h1>
        <p>
          A simple React/Redux application built with a Rails API, keep track of
          your vinyl collection, and add reviews.
        </p>
        <Link className="btn btn-primary" to="/albums">
          Albums
        </Link>{" "}
        <Link className="btn btn-primary text-center" to="/albums/new">
          Add Album
        </Link>
      </Jumbotron>
    </>
  );
};

export default Home;
