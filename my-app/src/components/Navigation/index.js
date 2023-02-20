import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import frenchFlag from "../../assets/quebec_flag.png";
import englishFlag from "../../assets/usa_flag.png";


function Navigation(props) {
	const { t } = useTranslation();
	const { currentTab, setCurrentTab } = props;
	const [language, setLanguage] = React.useState({ text: 'English', flag: englishFlag });

	const handleLanguageSwitch = () => {
		if (language.text === 'English') {
			setLanguage({ text: 'French', flag: frenchFlag });
			i18next.changeLanguage('fr');
		} else {
			setLanguage({ text: 'English', flag: englishFlag });
			i18next.changeLanguage('en');
		}
	};

	return (
		<Container fluid className="p-0">
			<Navbar fluid collapseOnSelect bg="dark" variant="dark" className="px-2 p-sm-0" id="navbar-collapse-id" expand="lg" fill activekey={currentTab} justified>
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav px-3 px-sm-1 px-md-0" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav activeKey={currentTab} onSelect={setCurrentTab} className="px-3 px-sm-1 px-md-0">
							<Nav.Item>
								<Nav.Link onClick={() => setCurrentTab("about")} eventKey="about">
									{t("About")}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link onClick={() => setCurrentTab("portfolio")} eventKey="portfolio">
									{t("Portfolio")}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link onClick={() => setCurrentTab("contact")} eventKey="contact">
									{t("Contact")}
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link onClick={() => setCurrentTab("resume")} eventKey="resume">
									{t("Resume")}
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<Button variant="outline-light" onClick={handleLanguageSwitch}>
								<img src={language.text === 'English' ? frenchFlag : englishFlag} alt={language.text === 'English' ? 'French' : 'English'} width="30" height="20" />
								&nbsp;{t(language.text === 'English' ? 'French' : 'English')}
							</Button>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
}

export default Navigation;