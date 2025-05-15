import React from "react";
import Header from "./componentes/Header.js";
import About from "./componentes/About.js";
import Experience from "./componentes/Experience.js";
import Education from "./componentes/Education.js";
import Skills from "./componentes/Skills.js";
import Projects from "./componentes/Projects.js";
import Contact from "./componentes/Contact.js";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-grid">
        <div className="left-column">
          <About />
          <Education />
           <Projects />
        </div>
        <div className="right-column">
          <Experience />
          <Skills />
         
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;

