import React, { Component, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import 'semantic-ui-css/semantic.min.css';
import '../../index.css';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_ixyt7la";
const TEMPLATE_ID = "template_ym3lv5l";
const USER_ID = "9SWT7Ik6Siv4HlHnh";

function ContactUs(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('website_data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    // For the localization
    const { t } = useTranslation();

    return (
        <div>
            {data && (
                <div>
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="container mt-5">
                                    <h2 className="mb-3">{t(data.main.contactmessage_en)}</h2>
                                    <form onSubmit={handleOnSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="name">
                                                {t(data.main.name_contact)}
                                            </label>
                                            <input className="form-control" type="text" id="name" name="name" placeholder="John Doe" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="email">
                                                {t(data.main.email_contact)}
                                            </label>
                                            <input className="form-control" type="email" id="email" name="email" placeholder="johndoe@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="message">
                                                {t(data.main.message_contact)}
                                            </label>
                                            <textarea className="form-control" id="message" name="message" placeholder="Are you available to work with us?" required />
                                        </div>
                                        <div class="col d-flex align-items-center justify-content-center">
                                            <button className="btn btn-primary btn-lg" type="submit">
                                                {t(data.main.send_contact)}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="container mt-5">
                                    <MapContainer center={[45.440983, -73.602905]} zoom={13} scrollWheelZoom={false}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={[45.440983, -73.602905]}>
                                            <Popup>
                                                {t("Angrignon Park")}
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div><br></br>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}

export default ContactUs;
