import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">vinylFile</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/albums">Albums</Nav.Link>
            <Nav.Link href="/albums/new">Add New Album</Nav.Link>
          </Nav>
        </Navbar>
    </div>
  )
}
