import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Image } from "react-bootstrap";

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
