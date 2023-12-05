import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareLinkedin,
} from "react-icons/fa6";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa6";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="m-2"></FaGoogle>
          Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub className="m-2" />
          Login with GitHub
        </Button>
      </ButtonGroup>
      <div className="mb-4">
        <h6 className="mt-4">Find Us on</h6>
        <ListGroup as="ol">
          <ListGroup.Item className="mb-">
            <Button variant="color-black">
              <FaSquareFacebook className="me-2 h-20" />
              Facebook
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <Button variant="color-black">
              <FaSquareInstagram className="me-2 h-20" />
              Instagram
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <Button variant="color-black">
              <FaSquareTwitter className="me-2 h-20" />
              Twitter
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <Button variant="color-black">
              <FaLinkedin className="me-2 h-20" />
              Linkedin
            </Button>
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <Button variant="color-black">
              <FaSquareWhatsapp className="me-2 h-20" />
              WhatsApp
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-2">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
