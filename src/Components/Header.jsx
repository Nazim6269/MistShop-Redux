import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/" className={style.link}>
            MistShop
          </Link>
          <Nav className="me-auto">
            <Link to="/" className={style.link}>
              Home
            </Link>
            <Link to="/carts" className={style.link}>
              My Carts
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
