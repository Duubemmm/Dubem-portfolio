import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project"
import Contact from "./components/Contact"
import Preloader from "./components/Preloader";
import { Routes, Route } from "react-router"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className="animate-in fade-in duration-700">
          <Header />
          <About />
          <Project/>
          <Contact/>
        </main>
      )}
    </>
  );
}

export default App;