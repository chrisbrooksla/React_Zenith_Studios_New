import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "../images/home-carousel/banner_1.jpg",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: "../images/home-carousel/big-studio.jpg",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: "../images/home-carousel/thehall.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const HomeCarousel = () => <UncontrolledCarousel items={items} />;

export default HomeCarousel;