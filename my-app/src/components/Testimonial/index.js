import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "./testimonials.css";


const Testimonials = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevClick = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentIndex < props.testimonials.length - 3) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return (
      <Container className="testimonials-container">
        <Row>{/* 
          <Col md={12}>
            <Button onClick={handlePrevClick} className="testimonials-button">
              Prev
            </Button>
            <Button onClick={handleNextClick} className="testimonials-button">
              Next
            </Button>
          </Col> */}
          {props.testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card">
                <Image
                  src={testimonial.picture}
                  alt="Profile"
                  className="profile-picture"
                  roundedCircle
                />
                <Card.Body>
                  <Card.Text><h3 className="testimonial-quote">“</h3>{testimonial.text}<h3 className="testimonial-quote">”</h3></Card.Text>
                  <Card.Title className="testimonial-author">
                    {testimonial.author}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="dots-container">
          {Array(Math.ceil(props.testimonials.length / 3)).fill().map((_, index) => (
            <div
              key={index}
              className={`dot ${index === Math.floor(currentIndex / 3) ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * 3)}
            />
          ))}
        </div>
      </Container>
    );
  };
  

export default Testimonials;
