import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Navbar />
<Hero />
<About />
<Skills />
<Certificates />
<Projects />
<Contact />
<Footer />
    </>
  );
}

export default App;