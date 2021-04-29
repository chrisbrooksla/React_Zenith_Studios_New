import React from "react";
import Gallery from "react-grid-gallery";
import {Container, Col, Row} from 'reactstrap'



const IMAGES = [
  {
    src: "../images/gallery/gallery-1.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-1-thumb.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 300,
    
  },
  {
    src: "../images/gallery/gallery-2.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-2-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    
  },

  {
    src: "../images/gallery/gallery-3.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-3-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
    src: "../images/gallery/gallery-4.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-4-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    
  },
  {
    src: "../images/gallery/gallery-5.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-5-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },

  {
    src: "../images/gallery/gallery-6.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-6-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
    src: "../images/gallery/gallery-7.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-7-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    
  },
  {
    src: "../images/gallery/gallery-8.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-8-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },

  {
    src: "../images/gallery/gallery-9.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-9-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
    src: "../images/gallery/gallery-10.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-10-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
   
  },
  {
    src: "../images/gallery/gallery-11.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-11-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },

  {
    src: "../images/gallery/gallery-12.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-12-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
    src: "../images/gallery/gallery-13.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-13-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
    src: "../images/gallery/gallery-14.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-14-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-15.jpeg",
    thumbnail:
    "../images/gallery-thumbs/gallery-15-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-16.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-16-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-17.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-17-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-18.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-18-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-19.png",
    thumbnail:
    "../images/gallery-thumbs/gallery-19-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-20.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-20-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-21.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-21-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-22.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-22-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-23.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-23-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  {
      src: "../images/gallery/gallery-24.jpg",
    thumbnail:
    "../images/gallery-thumbs/gallery-24-thumb.jpg",
      thumbnailWidth: 300,
      thumbnailHeight: 300,
  },
  
  
];

function GalleryComponent() {
  return (
    <Container className="gallery-area">
      <Row className="justify-content-center">
        <Col>
        <Gallery
      images={IMAGES}
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
    </Col>
      </Row>
    </Container>
  );
}

export default GalleryComponent