import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Send email notification
    fetch("/.netlify/functions/notify")
      .then((res) => res.json())
      .then((data) => console.log("Email Status:", data.message))
      .catch((err) => console.error("Email Notification Error:", err));

    // Count Function for visitor count
    fetch('/.netlify/functions/visitor')
      .then((res) => res.json())
      .then((data) => {
        if (data?.count != null) {
          console.log("Visitor Count:", data.count);
        } else {
          console.warn("⚠️ Count missing in response:", data);
        }
      })
      .catch((err) => {
        console.error("Visitor function error:", err);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
