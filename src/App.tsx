import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { supabase } from "../supabaseClient";

const [count, setCount] = useState(null);

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
    const updateVisitorCount = async () => {
      const { data, error } = await supabase
        .from("visitor_count")
        .select("*")
        .single();

      if (!error && data) {
        const newCount = data.count + 1;

        await supabase
          .from("visitor_count")
          .update({ count: newCount })
          .eq("id", data.id);

        setCount(newCount);
      }
    };

    updateVisitorCount();

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