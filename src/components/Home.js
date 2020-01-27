import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <Jumbotron fluild className="text-center">
        <h1>vinylFile.</h1>
        <p>
          A simple React/Redux application built with a Rails API, add an album or post a review.
        </p>
        <p>
          <Button variant="primary" href='/albums'>Albums</Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default Home;
