import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Skills />
        <Experience />
        <Education />
      </main>
    </>
  );
}
