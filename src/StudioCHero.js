import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

function StudioCHero() {
  return (
    <Container fluid className="hero-image-area">
      <Row>
        <Col>
          <img
            className="hero-image"
            src="../images/studios-page/studio-piano.jpg"
            style={{ height: "auto", width: "100%" }}
          ></img>
        </Col>
      </Row>
    </Container>
  );
}
export default StudioCHero;