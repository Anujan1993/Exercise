import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default (props) => {
  const { icon, title, description, url } = props;
  return (
    <Card>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description} </Card.Text>
        <Link to={url}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
