import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="bg-body-tertiary mb-4"
    >
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
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Nav.Link>
            <Nav.Link href="#deets">
              {user?.uid ? (
                <>
                  <span className="me-3">{user?.displayName}</span>
                  <Button variant="outline-dark" onClick={handleLogOut}>
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link className="me-3" to="/login">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                </>
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
