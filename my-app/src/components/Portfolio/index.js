import React, { Component, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./portfolio.css";
import { useTranslation } from 'react-i18next';

import under_construction from "../../assets/under_construction.jpg";


function Portfolio() {
    const [data, setData] = useState(null);

    // For the localization
    const { t } = useTranslation();

    const projects = [
        {
            name: t("Project") + " 1",
            description: t("A brief description of the project"),
            image: under_construction,
            link: "https://example.com"
        },
        {
            name: t("Project") + " 2",
            description: t("A brief description of the project"),
            image: under_construction,
            link: "https://example.com"
        },
        {
            name: t("Project") + " 3",
            description: t("A brief description of the project"),
            image: under_construction,
            link: "https://example.com"
        }
    ];

    useEffect(() => {
        fetch('website_data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data && (
                <Container>
                    <Row className="align-items-center my-4">
                        <div className="portfolio">
                            <h2>{t("Portfolio")}</h2>
                            <div className="projects">
                                {projects.map(project => (
                                    <div key={project.name} className="project-card">
                                        <img src={project.image} alt={project.name} />
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">{t("View Project")}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Row>
                    <br></br>
                </Container>
            )}
        </div>
    );
}


export default Portfolio;
