import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Ourwork from "./Components/Ourwork";
import Service from "./Pages/Service";

function App() {

  useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,    // Whether animation should only happen once
          // ... other options like easing, offset, disable
        });
      }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Ourwork" element={<Ourwork/>}/>
        {/* <Route path="/" element={<About/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/" element={<Career/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
