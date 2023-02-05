import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Col, Container, Row } from 'react-bootstrap';

import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../index.css';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_ixyt7la";
const TEMPLATE_ID = "template_ym3lv5l";
const USER_ID = "9SWT7Ik6Siv4HlHnh";

class ContactUs extends Component {
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
        // const [formStatus, setFormStatus] = "" //React.useState('Send')
        // const onSubmit = (e) => {
        //     e.preventDefault()
        //     setFormStatus('Submitting...')
        //     const { name, email, message } = e.target.elements
        //     let conFom = {
        //         name: name.value,
        //         email: email.value,
        //         message: message.value,
        //     }
        //     console.log(conFom)
        // }
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

        return (
            <div>
                {data && (
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className="container mt-5">
                                        <h2 className="mb-3">{data.main.contactmessage_en}</h2>
                                        <form onSubmit={handleOnSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="name">
                                                    {data.main.name_contact}
                                                </label>
                                                <input className="form-control" type="text" id="name" name="name" placeholder="John Doe" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="email">
                                                    {data.main.email_contact}
                                                </label>
                                                <input className="form-control" type="email" id="email" name="email" placeholder="johndoe@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="message">
                                                    {data.main.message_contact}
                                                </label>
                                                <textarea className="form-control" id="message" name="message" placeholder="Are you available to work with us?" required />
                                            </div>
                                            <button className="btn btn-danger" type="submit">
                                                {data.main.send_contact}
                                            </button>
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
                                                    Parc Angrignon
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
}

export default ContactUs;
