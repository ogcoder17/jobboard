import React from 'react';
// import { Link } from 'react-router-dom'; // Uncomment if you use React Router
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';

const Navbar = () => {
  return (
    <div>
      <NavbarRB expand="lg" className="bg-body-tertiary">
        <Container>
          <NavbarRB.Brand href="/" style={{fontFamily:"Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",}}>DUTY QUEST</NavbarRB.Brand>
          <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
          <NavbarRB.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Login">LOGIN</Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Joblistings">Job Listings</Nav.Link>
              <Nav.Link href="/Employerdash">Employer Dashboard</Nav.Link>
              <Nav.Link href="/Jobseekerdash">Job Seeker Dashboard</Nav.Link>
            </Nav>
          </NavbarRB.Collapse>
        </Container>
      </NavbarRB>
    </div>
  );
};

export default Navbar;