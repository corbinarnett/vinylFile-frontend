import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className=" justify-content-lg-start">
        <Link className="navbar-brand" to="/">
          vinylFile
        </Link>
        <Nav className=" mr-auto">
          {/* <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/albums/new">Add New Album</Nav.Link> */}
          <Link className="btn btn-primary" to="/albums">
            Albums
          </Link>{" "}
          <Link className="btn btn-primary text-center" to="/albums/new">
            Add Album
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};
