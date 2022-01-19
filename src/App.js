import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Projects from "./views/Projects";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
