import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ResumeSection from "./components/ResumeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-800 via-gray-950 to-gray-900 min-h-screen font-sans scroll-smooth">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            {/* Main page with all sections */}
            <Route path="/" element={
              <>
                <Hero />
                <ResumeSection />
                <Projects />
                <Contact />
              </>
            } />
            
            {/* Individual section routes if needed */}
            <Route path="/resume" element={<ResumeSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;