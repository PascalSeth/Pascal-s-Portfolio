"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section id="#">
          <Hero />
        </section>
        <section >
          <Grid />
        </section>
        <section id="projects">
          <RecentProjects />
        </section>
        <section id="clients">
          <Clients />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="approach">
          <Approach />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
