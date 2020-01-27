import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <Jumbotron
        fluild
        className="text-center"
        style={{ backgroundColor: "white" }}
      >
        <h1>vinylFile.</h1>
        <p>
          A simple React/Redux application built with a Rails API, keep track of
          your vinyl collection, and add reviews.
        </p>
        <p>
          <Button variant="primary" href="/albums">
            Albums
          </Button>{" "}
          <Button variant="primary" href="/albums/new">
            Add Album
          </Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default Home;
