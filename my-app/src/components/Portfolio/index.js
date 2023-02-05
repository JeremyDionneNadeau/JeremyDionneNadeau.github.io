import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./portfolio.css";

import under_construction from "../../assets/under_construction.jpg";


const projects = [
    {
        name: "Project 1",
        description: "A brief description of the project",
        image: under_construction,
        link: "https://example.com"
    },
    {
        name: "Project 2",
        description: "A brief description of the project",
        image: under_construction,
        link: "https://example.com"
    },
    {
        name: "Project 3",
        description: "A brief description of the project",
        image: under_construction,
        link: "https://example.com"
    }
];

class Portfolio extends Component {
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
                    <Container>
                        <Row className="align-items-center my-4">
                            <div className="portfolio">
                                <h2>Portfolio</h2>
                                <div className="projects">
                                    {projects.map(project => (
                                        <div key={project.name} className="project-card">
                                            <img src={project.image} alt={project.name} />
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Row><br></br>
                    </Container>
                )
                }
            </div>
        );
    }
}

export default Portfolio;
