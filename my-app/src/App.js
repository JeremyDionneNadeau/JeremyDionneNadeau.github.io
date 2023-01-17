/*import React, {useState} from "react";
import logo from './logo.svg';
import Header from "./components/Header";
import { Container } from "react-bootstrap";

import './App.css';


function WelcomeMessage() {
  return <p>Welcome!</p>
}

function App() {

	const [currentTab, setCurrentTab] = useState("about");

  return (
    <div className="App">
      
			<Container fluid className="p-0">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab} className="p-0 m-0"></Header>
			</Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, {useState} from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
// import Footer from "./components/Footer";
//  import Resume from "./components/Resume";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

// library.add(fab);

import { useTranslation } from 'react-i18next'


// Contains the value and text for the options
const languages = [
  { value: '', text: "Options" },
  { value: 'en', text: "English" },
  { value: 'fr', text: "French" }
]

function App() {
	const [currentTab, setCurrentTab] = useState("about");

  
  // It is a hook imported from 'react-i18next'
  const { t } = useTranslation(); 

  const [lang, setLang] = useState('en');

  // This function put query that helps to 
  // change the language
  const handleChange = e => { 
      setLang(e.target.value);
      let loc = "http://localhost:3000/";
      window.location.replace(loc + "?lng=" + e.target.value);
  }

	const renderTab = () => {
		switch (currentTab) {
			case "about":
//				return <About />;
			case "portfolio":
//				return <Portfolio />;
			case "contact":
//				return <Contact />;
			case "resume":
//				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<Container fluid className="p-0">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab} className="p-0 m-0"></Header>
			</Container>
			<Container fluid>
				<main>{renderTab()}</main>
			</Container>
			<Container fluid>
        {/* <Footer /> */}
			</Container><div className="App">
  
  {/* // we are showing the value by using the 
  // keys we have created in the website 
  <h1>{t('welcome')}</h1>
  <label>{t('choose')}</label>

  <select value={lang} onChange={handleChange}>
      {languages.map(item => {
          return (<option key={item.value} 
          value={item.value}>{item.text}</option>);
      })}
  </select> */}
</div>
		</div>
	);
}

export default App;
