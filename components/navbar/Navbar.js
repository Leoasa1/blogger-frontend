// import { useContext } from "react";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import Style from "./style.module.css";

export default function Header() {
  return (
    <Navbar className="mt-4 font-robo" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blogger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link href="/blogs">
              <a className="nav-item nav-link active mr-2">Blogs</a>
            </Link>
            <Link href="/about">
              <a className="nav-item nav-link active mr-2">About Us</a>
            </Link>
            <Link href="/account/login">
              <a className={`btn + ${Style.primary} + rounded-pill + mx-2`}>
                Sign In
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
