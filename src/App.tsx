import React, { useEffect} from 'react';
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
    // Update counter
    fetch("/.netlify/functions/counter")
      .then((res) => res.json())
      .then((data) => console.log("Visitor Count:", data.count));
  
    // Send email
    fetch("/.netlify/functions/notify")
      .then((res) => res.json())
      .then((data) => console.log("Email Status:", data.message));


    //Count Function
    fetch('/.netlify/functions/visitor')
    .then((res) => res.json())
    .then((data) => {
      console.log('Visitor Count:', data.count);
      // update the DOM with count if needed
    })
    .catch((err) => console.error('Error:', err));
  }, []);
  
  // useEffect(() => {
  //   fetch("/.netlify/functions/notify");
  // }, []);

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