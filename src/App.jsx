import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import StackDecision from "./components/StackDecision.jsx";

function App() {
  return (
    <main className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <StackDecision />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
