import React from "react";
import Navigation from "../Navigation";
import {Container, Row, Col} from "react-bootstrap";
import "./header.css";
import { useTranslation } from 'react-i18next';


function Header(props) {
	const {currentTab, setCurrentTab} = props;
	const { t } = useTranslation();

	return (
		<Container fluid className="p-0">
			<Row className="p-0">
				<Col className="text-center p-0" md={12}>
				<div className="jumbotron-fluid mt-2">
					<h2 className="display-2 mb-0 pb-0">{t('Jérémy Dionne-Nadeau')}</h2>
					<p className="lead pt-0 mt-0">{t('Full Stack Developer')}</p>
					</div>
				</Col>
				<header>
					<div></div>
					<div>
						<Navigation currentTab={currentTab} setCurrentTab={setCurrentTab}></Navigation>
					</div>
				</header>
			</Row>
		</Container>
	);
}

export default Header;