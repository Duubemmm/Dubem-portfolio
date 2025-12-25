// import { useState, useEffect } from "react";
import About from "./components/About";
import Project from "./components/Project"
import Contact from "./components/Contact"
import Home from "./pages/Home";
import Layout from "./pages/Layout";
// import Preloader from "./animations/Preloader";
import { Routes, Route } from "react-router";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        <main className="animate-in fade-in duration-700">
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="project" element={<Project />}/>
            <Route path="contact" element={<Contact/>}/>
            </Route>
          </Routes>
        </main>
      {/* )} */}
    </>
  );
}

export default App;
