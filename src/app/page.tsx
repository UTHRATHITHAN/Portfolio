"use client"

import useNavStore from "@/store/NavStore";
import HeroSection from "./home/HeroSection";
import Footer from "./home/Footer";
import Projects from "./home/Projects";
import Tech from './home/Tech'
import AboutMe from "./home/AboutMe";


export default function Home() {
  const { isNavOpen } = useNavStore((state: any) => {
    return { isNavOpen: state.isNavOpen }
  })

  return (
    <main className={`${isNavOpen && 'fixed w-full'} bg-[#0E1013] container `}>

      <HeroSection />
      <AboutMe />
      <Tech />
      <Projects />
      <Footer />
    </main>
  );
}
