
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Ourwork from "./Components/Ourwork";
import Service from "./Pages/Service";


// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./Pages/Home";
// import { Routes, Route, BrowserRouter } from "react-router";
// import ScrollToTop from "./Components/ScrollToTop";
// import Careers from "./Pages/Careers";
// import Services from "./Pages/Services";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services/:id" element={<Services />} />
//           <Route path="/careers" element={<Careers />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
// 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import WhyChooseUs from "./components/WhyChooseUs";
// import WhyInternWithUs from "./components/WhyInternWithUs";
// import ReadyToJoinUs from "./components/ReadyToJoinUs";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<WhyChooseUs />} />
//             <Route
//               path="/career"
//               element={
//                 <>
//                   <WhyInternWithUs />
//                   <ReadyToJoinUs />
//                 </>
//               }
//             />
//             <Route path="/services" element={<h1>Services Page</h1>} />
//             <Route path="/our-work" element={<h1>Our Work Page</h1>} />
//             <Route path="/contact" element={<h1>Contact Page</h1>} />
//             <Route path="/verify-certificate" element={<h1>Verify Certificate Page</h1>} />
//             <Route path="/blog" element={<h1>Blog Page</h1>} />
//             <Route path="/faq" element={<h1>FAQ Page</h1>} />
//             <Route path="/support" element={<h1>Support Page</h1>} />
//             <Route path="/privacy-policy" element={<h1>Privacy Policy Page</h1>} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>

// 
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";
import WhyChooseUs from "./Components/WhyChooseUs";
import WhyInternWithUs from "./Components/WhyInternWithUs";
import ReadyToJoinUs from "./Components/ReadyToJoinUs";


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

    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <div className="flex-grow">
          <Routes>
            {/* main branch routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/careers" element={<Careers />} />

            {/* annu branch routes */}
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route
              path="/career"
              element={
                <>
                  <WhyInternWithUs />
                  <ReadyToJoinUs />
                </>
              }
            />
            <Route path="/services" element={<h1>Services Page</h1>} />
            <Route path="/our-work" element={<h1>Our Work Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route path="/verify-certificate" element={<h1>Verify Certificate Page</h1>} />
            <Route path="/blog" element={<h1>Blog Page</h1>} />
            <Route path="/faq" element={<h1>FAQ Page</h1>} />
            <Route path="/support" element={<h1>Support Page</h1>} />
            <Route path="/privacy-policy" element={<h1>Privacy Policy Page</h1>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );

}

export default App
