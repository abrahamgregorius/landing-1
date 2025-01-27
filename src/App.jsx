import { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import "./index.css";
import { initFlowbite } from "flowbite";
import SectionVideo from "./components/sections/SectionVideo";
import SectionVideo2 from "./components/sections/SectionVideo2";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import SectionHarga from "./components/sections/SectionHarga";

function App() {
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Section1></Section1>
      <SectionHarga></SectionHarga>
      <Section2></Section2>
      <SectionVideo2></SectionVideo2>
      <Section3></Section3>
      <Section4></Section4>
      <SectionVideo></SectionVideo>
      <Section5></Section5>
      <Footer></Footer>
    </>
  );
}

export default App;
