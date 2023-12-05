import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function BrandCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers-fenix.eu/full/180901/043647815.jpg"
          alt="first-slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1255618333/photo/i-am-happy-in-nature.jpg?s=612x612&w=0&k=20&c=od9Wxkh6b5WzMDHVA9bee4CG92XpVlcrC7eRDDQUbpw="
          alt="first-slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1390054063/photo/portrait-of-beautiful-little-girl-in-summer-nature-at-sunset.jpg?s=612x612&w=0&k=20&c=F3qp5eeIXUbW-wQjZWQNFQnWkDVba_kY5VjMM4D6gw0="
          alt="first-slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel;
