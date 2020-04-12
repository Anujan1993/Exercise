import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import { getData } from "../services/api";

function App() {
  const [posts, setPosts] = useState([]);
  const url = "http://data-anujan.surge.sh/data.json";

  useEffect(() => {
    getData(url)
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        setPosts(data.posts);
      });
  }, []);

  return (
    <div className="App">
      <Row className="show-grid">
        {posts.length > 0 &&
          posts.map((data, i) => {
            const { icon, title, description, url } = data;
            return (
              <Col lg={4} sm={6} key={i}>
                <CardComponent
                  icon={icon}
                  title={title}
                  description={description}
                  url={url}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default App;
