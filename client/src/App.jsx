import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Experience from "./pages/Experience";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
