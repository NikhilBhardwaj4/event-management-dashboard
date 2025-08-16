import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <BsNavbar bg="light" expand="lg" className="shadow-sm py-2">
      <Container>
        {/* Brand Logo + Name */}
        <BsNavbar.Brand
          href="/"
          className="d-flex align-items-center fw-bold fs-3"
          style={{ letterSpacing: "1px" }}
        >
          <img
            src="/logo1.png" // 👈 Put your logo in public/logo.png
            alt="Logo"
            width="45"
            height="45"
            className=" shadow-sm me-2 border border-2 border-primary"
          />
          <span
            style={{
              background: "linear-gradient(90deg, #007bff, #6610f2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Event Dashboard
          </span>
        </BsNavbar.Brand>

        {/* Toggle for Mobile */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/create">Create Event</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
