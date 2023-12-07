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
          src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/brand2.jpg"
          alt="first-slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.therecordnews.ca/wp-content/uploads/2023/08/Breaking-News_Facebook-Blocking-RGB.jpg"
          alt="first-slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://oge.tmu.edu.tw/wp-content/uploads/2019/01/%E4%B8%BB%E8%A6%96%E8%A6%BA1-04_181116.jpg"
          alt="first-slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel;
