import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  const { image_url, title, details, category_id } = news;
  return (
    <div>
      <h2>{news.title}</h2>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All news In this Category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
