
import Contact from "../Components/Contact";
import Contactform from "../Components/Contactform";
import Ourwork from "../Components/Ourwork";

const Home=()=>{
    return(
    <>
        <Ourwork />
        <Contact />
        <Contactform />
    </>
    )
}

export default Home;

import React from "react";
import Hero from "../Components/Hero";
import WhatWeDo from "../Components/WhatWeDo";
import JoinTeam from "../Components/JoinTeam";
import WhyChooseUs from "../Components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <JoinTeam />
    </div>
  );
};

export default Home;
