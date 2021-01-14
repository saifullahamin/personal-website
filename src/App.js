import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Resume from "./components/Resume";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loaderContainer");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="education" element={<Education />}></Route>
        <Route path="experience" element={<Experience />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="resume" element={<Resume />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
