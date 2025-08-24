import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Ourwork from "./Components/Ourwork";
import Service from "./Pages/Service";

function App() {

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
