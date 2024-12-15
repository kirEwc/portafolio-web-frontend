"use client";

import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <main>
        <Hero />
        <Experience />
        <Projects />
        <About/>
      
    </main>
  );
}
