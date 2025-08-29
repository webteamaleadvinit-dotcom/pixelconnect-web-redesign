import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router";
import ScrollToTop from "./Components/ScrollToTop";
import Careers from "./Pages/Careers";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
