import React from "react";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo";
import JoinTeam from "../Components/JoinTeam";
import Footer from "../Components/Footer";
import OurWork from "../Components/OurWork";
import Contact from "../Components/Contact";
import Contactusform from "../Components/Contactusform";
import WhyChooseUs from "../Components/Whychooseus";
const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurWork/>
      <WhyChooseUs/>
      <JoinTeam />
      <Contact/>
      <Contactusform/>
      <Footer />
    </div>
  );
};

export default Home;
