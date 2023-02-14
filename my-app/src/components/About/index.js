import React, { Component } from 'react';

import { Col, Container, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { FaBuilding, FaEnvelope, FaGraduationCap, FaIcons, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

import Testimonial from '../Testimonial';
import professional_men_1 from "../../assets/professional_men_1.jpg";
import professional_men_2 from "../../assets/professional_men_2.jpg";
import professional_women_1 from "../../assets/professional_women_1.jpg";


const testimonials = [
    {
        picture: professional_men_1,
        text: "This is an amazing product that has transformed my business. I highly recommend it to anyone looking for a solution to their problems.",
        author: "John Doe"
    },
    {
        picture: professional_women_1,
        text: "This is an amazing product that has transformed my business. I highly recommend it to anyone looking for a solution to their problems.",
        author: "Jane Doe"
    },
    {
        picture: professional_men_2,
        text: "I have never seen such an efficient and well-designed product before. I recommend it to anyone looking for a solution to their problems.",
        author: "Bob Smith"
    },
    {
        picture: professional_men_1,
        text: "This product has greatly improved my life! It has made my life so much easier.",
        author: "Jim Smith",
    },
    {
        picture: professional_women_1,
        text: "This website is efficient and well-designed. I highly recommend this developper to anyone.",
        author: "Someone"
    },
    {
        picture: professional_men_2,
        text: "This is an amazing product that has transformed my business. I highly recommend it to anyone looking for a solution to their problems.",
        author: "John Doe"
    },
];


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch('website_data.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(error => console.error(error));
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {data && (
                    <Container className="d-flex align-items-center">
                        <Row className="align-items-center my-4">
                            <Col flex className="d-flex align-items-center">
                                <Image src="about_me.png" alt="About Image" roundedCircle className="profile-image" />
                            </Col>
                            <Col xs={12} sm={9} md={9}>
                                <h1>About me</h1>
                                <p>{data.main.description}</p>

                                <ListGroup>
                                    <ListGroupItem>
                                        <Row className="d-flex align-items-center justify-content-center">
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaMapMarkerAlt icon={FaMapMarkerAlt} size="28" className="skill-icon" />
                                                <div className="my-auto">&nbsp;{data.main.address.city}, {data.main.address.province}</div>
                                            </Col>
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaGraduationCap size="28" className="skill-icon"></FaGraduationCap>
                                                <div className="my-auto">&nbsp;{data.main.university}</div>
                                            </Col>
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaBuilding size="28" className="skill-icon"></FaBuilding>
                                                <div className="my-auto">&nbsp;{data.main.work}</div>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <Row className="d-flex align-items-center">
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaEnvelope size="28" className="skill-icon" />
                                                <div className="my-auto">&nbsp;{data.main.email}</div>
                                            </Col>
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaPhone icon={FaPhone} size="28" className="skill-icon" />
                                                <div className="my-auto">&nbsp;{data.main.phone}</div>
                                            </Col>
                                            <Col xs={12} sm={6} md={4} className="d-flex">
                                                <FaIcons size="28" className="skill-icon" />
                                                <div className="my-auto">&nbsp;{data.main.interests}</div>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup><br></br>
                            </Col>
                            <div>
                                <Testimonial testimonials={testimonials} />
                            </div>
                        </Row>
                        <br></br>
                    </Container>
                )
                }
            </div>
        );
    }
}

export default About;
