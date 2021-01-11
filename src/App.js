import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import HomeExtension from "./components/HomeExtesion";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
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
      <Home />
      <HomeExtension />
      <Footer />
    </div>
  );
}

export default App;
