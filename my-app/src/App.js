import React, { useState, useEffect } from "react";
import About from "./components/About";
import ContactUs from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";


// Contains the value and text for the options
/* const languages = [
  { value: '', text: "Options" },
  { value: 'en', text: "English" },
  { value: 'fr', text: "French" }
] */

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
				return <Portfolio />;
      case "contact":
        return <ContactUs />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Container fluid className="p-0">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} className="p-0 m-0"></Header>
      </Container>
      <Container fluid>
        <main>{renderTab()}</main>
      </Container>
      <Container fluid className="p-0">
        <Footer />
      </Container><div className="App">

      </div>
    </div>
  );
}

export default App;
