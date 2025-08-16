import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDoorFill, CalendarEvent, PlusCircle, PersonCircle } from "react-bootstrap-icons";


const Navbar = () => {
  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      className="shadow-sm py-3 px-3"
      style={{
        background: "rgba(0, 0, 0, 0.4)", // darker glass look
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Container fluid>
        {/* Brand Logo + Name */}
        <BsNavbar.Brand
          href="/"
          className="d-flex align-items-center fw-bold fs-3"
          style={{ letterSpacing: "1px" }}
        >
          <img
            src="/logo1.png"
            alt="Logo"
            width="48"
            height="48"
            className="shadow-sm me-2 border border-2 border-light rounded-circle"
          />
          <span
            style={{
              background: "linear-gradient(90deg, #ffdd00, #ff0080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Event Dashboard
          </span>
        </BsNavbar.Brand>

        {/* Mobile Toggle */}
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold d-flex align-items-center gap-3">
            <Nav.Link
              href="/"
              className="d-flex align-items-center gap-1 text-white nav-link-custom"
            >
              <HouseDoorFill size={18} /> Home
            </Nav.Link>
            <Nav.Link
              href="/events"
              className="d-flex align-items-center gap-1 text-white nav-link-custom"
            >
              <CalendarEvent size={18} /> Events
            </Nav.Link>
            <Nav.Link
              href="/create"
              className="d-flex align-items-center gap-1 text-white nav-link-custom"
            >
              <PlusCircle size={18} /> Create Event
            </Nav.Link>
            <Nav.Link
              href="/register"
              className="d-flex align-items-center gap-1 text-white nav-link-custom"
            >
              <PersonCircle size={18} /> Register
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>

      {/* Extra CSS for Hover & Animation */}
      <style>
        {`
          .nav-link-custom {
            position: relative;
            transition: color 0.3s ease-in-out;
          }
          .nav-link-custom::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, #ffdd00, #ff0080);
            transition: width 0.3s ease-in-out;
          }
          .nav-link-custom:hover::after {
            width: 100%;
          }
          .nav-link-custom:hover {
            color: #ffdd00 !important;
          }
        `}
      </style>
    </BsNavbar>
  );
};

export default Navbar;
