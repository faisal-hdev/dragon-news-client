import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
// import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          {/* <FaGoogle className="mr-2" /> */}
          <FaGoogle className="m-2"></FaGoogle>
          Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="m-2" />
          Login with GitHub
        </Button>
      </ButtonGroup>
      <div>
        <h6 className="mt-4">Find Us on</h6>
        <ListGroup as="ol">
          <ListGroup.Item className="mb-2">
            <Button variant="link">
              <FaFacebook className="m-1" />
              Facebook
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Button variant="link">
              <FaTwitter className="m-1" />
              Twitter
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Button variant="link">
              <FaWhatsapp className="m-1" />
              WhatsApp
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <Button variant="link">
              <FaInstagram className="m-1" />
              Facebook
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>{/* <BrandCarousel /> */}</div>
    </div>
  );
};

export default RightSideNav;
