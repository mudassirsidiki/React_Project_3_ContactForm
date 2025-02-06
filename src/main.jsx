import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import Contacthead from "./Components/Contacthead.jsx";
import Contactform from "./Components/Contactform.jsx";
import Hero from "./Components/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />

    <Contacthead />

    <div className="flex">
      <Contactform />

      <Hero />
    </div>

  </StrictMode>
);
