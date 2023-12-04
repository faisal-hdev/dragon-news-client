import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { author, title, _id, total_view, thumbnail_url, details, image_url } =
    news;
  console.log(news);
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image roundedCircle style={{ height: "60px" }} src={author.img} />
          <div className="align-items-center">
            <p>{author.name}</p>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
