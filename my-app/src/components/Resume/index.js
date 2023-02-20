import React, { Component, useState, useEffect } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faReact, faJava, faPython, faJs, faDocker, faHtml5, faBootstrap, faLinux } from '@fortawesome/free-brands-svg-icons';
import { SiCplusplus, SiFlask, SiSpring, SiDjango, SiVisualstudiocode, SiIntellijidea, SiAndroidstudio, SiRedis, SiPostman, SiPostgresql, SiGit, SiMysql } from 'react-icons/si';
import { SlSettings } from "react-icons/sl";
import { FaInfinity } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import "./resume.css";
import resume from "../../assets/resume/CV_JeremyDionneNadeau.pdf";


function Resume() {
    const [data, setData] = useState(null);

    // For the localization
    const { t } = useTranslation();

    useEffect(() => {
        fetch('website_data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data && (
                <div className="container mt-5">
                    <Container fluid className="p-0">
                        <Row>
                            <Col>
                                <Card className="resume-card">
                                    <Card.Header as="h5">{t("Resume")}</Card.Header>
                                    <Card.Body>
                                        <div class="row">
                                            <div class="col">
                                                <div class="col">
                                                    <Card className="resume-card">
                                                        <Card.Header as="h5" className="card-header-resume">{t("Summary")}</Card.Header>
                                                        <Card.Body>
                                                            <Card.Text>
                                                                <Card.Text>
                                                                    {t("Highly motivated and skilled software developer with 3 years of experience in building and maintaining web applications.")}
                                                                </Card.Text>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card><br></br>

                                                    <Card className="resume-card">
                                                        <Card.Header as="h5" className="card-header-resume">{t("Education")}</Card.Header>
                                                        <Card.Body>
                                                            <Card.Text>
                                                                <Card.Text>
                                                                    <strong>{t("Bachelor in Computer Science and Software Engineering")}</strong><br />
                                                                    {data.main.university} | {t("Graduated")} : {data.main.graduation}
                                                                    <p>{t("This program aims to train computer scientists capable of contributing to computer applications in various fields. The common core, a balanced set of theoretical, methodological and technical courses, leads to solid knowledge in computer science and software engineering. It is mainly based on basic concepts in software engineering, mathematics, programming, hardware and software systems.")}</p>
                                                                </Card.Text>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                            <div class="col">

                                                <Card className="resume-card">
                                                    <Card.Header as="h5" className="card-header-resume">{t("Experience")}</Card.Header>
                                                    <Card.Body>
                                                        <Card.Text>
                                                            <strong>{t("Python/Django Developer")}</strong><br />
                                                            JD Labs | 2020 - 2022<br />
                                                            <ul>
                                                                <li>{t("Developed and maintained web applications using Django, Python, Wagtail FASTAPI, Celery, SQLite, Redis, JSON, Javascript, HTML, CSS and Bootstrap")}</li>
                                                                <li>{t("Write code that is reusable, testable, and efficient.")}</li>
                                                                <li>{t("Implemented new features and functionality to improve user experience.")}</li>
                                                                <li>{t("Create and maintain the application's architecture.")}</li>
                                                                <li>{t("Create and implement applications that are low-latency, high-availability, and performant.")}</li>
                                                                <li>{t("Data storage solution integration.")}</li>
                                                                <li>{t("Agile development as well as the use of CI/CD (Jenkins and GitLab).")}</li>
                                                            </ul>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card><br></br>
                                                <div class="col d-flex align-items-center justify-content-center">
                                                    <button className="download-button">
                                                        <a className="download-button" href={resume} download>
                                                            {t("Download Resume")}
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div><br></br>


                                        <Card className="resume-card">
                                            <Card.Header as="h5" className="card-header-resume">Skills</Card.Header>
                                            <Card.Body>
                                                <strong>{t("Programming Languages")}</strong><br />
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faPython} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;Python</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faJs} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;JavaScript</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faJava} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;Java</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faHtml5} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;HTML5</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faCss3} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;CSS</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiCplusplus size="28" className="skill-icon"></SiCplusplus>
                                                                <div className="my-auto">&nbsp;c/c++</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup>
                                                <br></br>

                                                <strong>{t("Frameworks")}</strong><br />
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiDjango size="28" className="skill-icon"></SiDjango>
                                                                <div className="my-auto">&nbsp;Django</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faReact} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;React</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiFlask size="28" className="skill-icon"></SiFlask>
                                                                <div className="my-auto">&nbsp;Flask</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faBootstrap} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;BootStrap</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiSpring size="28" className="skill-icon"></SiSpring>
                                                                <div className="my-auto">&nbsp;Spring</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup><br></br>

                                                <strong>{t("IDEs")}</strong><br />
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiVisualstudiocode size="28" className="skill-icon"></SiVisualstudiocode>
                                                                <div className="my-auto">&nbsp;Visual Studio Code</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiIntellijidea size="28" className="skill-icon"></SiIntellijidea>
                                                                <div className="my-auto">&nbsp;IntelliJ</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiAndroidstudio size="28" className="skill-icon"></SiAndroidstudio>
                                                                <div className="my-auto">&nbsp;Android Studio</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup><br></br>

                                                <strong>{t("Databases")}</strong><br />
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="col d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="SearchIcon">
                                                                    <SiMysql size="28" className="SearchIcon"></SiMysql>
                                                                </div>
                                                                <div className="my-auto">&nbsp;MySQL</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiPostgresql size="28" className="skill-icon"></SiPostgresql>
                                                                <div className="my-auto">&nbsp;PostgreSQL</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiRedis size="28" className="skill-icon"></SiRedis>
                                                                <div className="my-auto">&nbsp;Redis</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup><br></br>

                                                <strong>{t("Other technologies")}</strong><br />
                                                {/*  <Card.Subtitle className="mb-2 text-muted">Other technologies</Card.Subtitle> */}
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faLinux} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;Linux</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SlSettings size="28" className="skill-icon"></SlSettings>
                                                                <div className="my-auto">&nbsp;REST</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FaInfinity size="28" className="skill-icon"></FaInfinity>
                                                                <div className="my-auto">&nbsp;CI/CD</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <FontAwesomeIcon icon={faDocker} size="2x" className="skill-icon" />
                                                                <div className="my-auto">&nbsp;Docker</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiGit size="28" className="skill-icon"></SiGit>
                                                                <div className="my-auto">&nbsp;Git</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <SiPostman size="28" className="skill-icon"></SiPostman>
                                                                <div className="my-auto">&nbsp;Postman</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup><br></br>

                                                <strong>{t("Development Methodology")}</strong><br />
                                                <ListGroup>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="my-auto">&nbsp;Agile</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="my-auto">&nbsp;Waterfall</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="my-auto">&nbsp;Kanban</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                    <ListGroupItem>
                                                        <Row className="d-flex align-items-center justify-content-center">
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="my-auto">&nbsp;SCRUM</div>
                                                            </Col>
                                                            <Col xs={6} sm={4} className="d-flex align-items-center justify-content-center">
                                                                <div className="my-auto">&nbsp;DEVOPS</div>
                                                            </Col>
                                                        </Row>
                                                    </ListGroupItem>
                                                </ListGroup><br></br>

                                                <Row className="resume-section">
                                                    <Col>
                                                        {/* <h3 className="section-title">Skills</h3>
                                                            <div className="skill-bars">
                                                                <ProgressBar className="skill-bar" variant="danger" now={80} label={`CSS`} />
                                                                <ProgressBar className="skill-bar" variant="warning" now={75} label={`JavaScript`} />
                                                                <ProgressBar className="skill-bar" variant="success" now={75} label={`React`} />
                                                            </div> */}
                                                        <Card className="skill-icons">
                                                            <Card.Body>
                                                                <FontAwesomeIcon icon={faCss3} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faReact} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faJava} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faPython} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faJs} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faDocker} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faHtml5} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faBootstrap} size="2x" className="skill-icon" />&nbsp;
                                                                <FontAwesomeIcon icon={faLinux} size="2x" className="skill-icon" />&nbsp;
                                                                <SiGit icon={SiGit} size="28" className="skill-icon"></SiGit>&nbsp;
                                                                <SiCplusplus icon={SiCplusplus} size="28" className="skill-icon"></SiCplusplus>&nbsp;
                                                                <SiFlask icon={SiFlask} size="28" className="skill-icon"></SiFlask>&nbsp;
                                                                <SiSpring icon={SiSpring} size="28" className="skill-icon"></SiSpring>&nbsp;
                                                                <SiDjango icon={SiDjango} size="28" className="skill-icon"></SiDjango>&nbsp;
                                                                <SiVisualstudiocode icon={SiVisualstudiocode} size="28" className="skill-icon"></SiVisualstudiocode>&nbsp;
                                                                <SiIntellijidea icon={SiIntellijidea} size="28" className="skill-icon"></SiIntellijidea>&nbsp;
                                                                <SiAndroidstudio icon={SiAndroidstudio} size="28" className="skill-icon"></SiAndroidstudio>&nbsp;
                                                                <SiRedis icon={SiRedis} size="28" className="skill-icon"></SiRedis>&nbsp;
                                                                <SiPostman icon={SiPostman} size="28" className="skill-icon"></SiPostman>&nbsp;
                                                                <SiPostgresql icon={SiPostgresql} size="28" className="skill-icon"></SiPostgresql>&nbsp;
                                                                <SiMysql icon={SiMysql} size="28" className="skill-icon"></SiMysql>&nbsp;
                                                                <SiPostman icon={SiPostman} size="28" className="skill-icon"></SiPostman>&nbsp;
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container><br></br>
                </div>
            )
            }
        </div>
    );
}

export default Resume;
