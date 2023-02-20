import React, { Component, useEffect, useState } from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useTranslation } from 'react-i18next';


function Footer() {
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
        <footer>
            {data && (
                <><MDBFooter className='text-center' color='white' bgColor='dark'>
                    <MDBContainer className='p-4'>
                        <section className='mb-4'>
                            <MDBBtn outline color="light" aria-label="Email" floating className='m-1' href='mailto:jeremydionnenadeau@gmail.com' role='button'>
                                <MDBIcon fas icon='envelope' />
                            </MDBBtn>

                            <MDBBtn outline color="light" aria-label="Instagram" floating className='m-1' href={data.main.instagram_url} role='button'>
                                <MDBIcon fab icon='instagram' />
                            </MDBBtn>

                            <MDBBtn outline color="light" aria-label="Linkedin" floating className='m-1' href={data.main.linkedin_url} role='button'>
                                <MDBIcon fab icon='linkedin-in' />
                            </MDBBtn>

                            <MDBBtn outline color="light" aria-label="Github" floating className='m-1' href={data.main.github_url} role='button'>
                                <MDBIcon fab icon='github' />
                            </MDBBtn>

                            <MDBBtn outline color="light" aria-label="Whatsapp" floating className='m-1' href='https://web.whatsapp.com/send?phone=+15149223355' role='button'>
                                <MDBIcon fab icon='whatsapp' />
                            </MDBBtn>
                        </section>

                        <section className=''>
                            <form action=''>
                                <MDBRow className='d-flex justify-content-center'>
                                    <MDBCol size="auto">
                                        <p className='pt-2'>
                                            <label><strong>{t("Sign up for our newsletter")}</strong></label>
                                        </p>
                                    </MDBCol>

                                    <MDBCol md='5' start>
                                        <MDBInput contrast placeholder='johndoe@email.com' type='email' label='Email address' className='mb-4' id="newsletter" />
                                    </MDBCol>

                                    <MDBCol size="auto">
                                        <MDBBtn outline color='light' type='submit' className='mb-4'>
                                            {t("Subscribe")}
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </section>

                        <section className='mb-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                                voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                                sequi voluptate quas.
                            </p>
                        </section>

                        <section className=''>
                            <MDBRow>
                                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                    <h5 className='text-uppercase'>Links</h5>

                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>

                                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                    <h5 className='text-uppercase'>Links</h5>

                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>

                                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                    <h5 className='text-uppercase'>Links</h5>

                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>

                                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                    <h5 className='text-uppercase'>Links</h5>

                                    <ul className='list-unstyled mb-0'>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 2
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 3
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!' className='text-white'>
                                                Link 4
                                            </a>
                                        </li>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </section>
                    </MDBContainer>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright :&nbsp;
                        <a className='text-white' href={data.main.project}>
                            {data.main.name}
                        </a>
                    </div>
                </MDBFooter>
                </>
            )}
        </footer>
    );
}

Footer.displayName = 'Footer';
export default Footer;
