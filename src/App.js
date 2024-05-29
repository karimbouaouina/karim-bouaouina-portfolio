import Opening from "./components/Opening";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [RunningOpening, setRunningOpening] = useState(true);

  return (
    <main
      className={`w-full flex flex-col items-center overflow-hidden bg-primary ${
        RunningOpening && "h-screen"
      }`}
    >
      <Opening Opening={RunningOpening} setOpening={setRunningOpening} />
      <Header />
      <Hero />
      <Introduction />
      <Services />
      <Biography />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
