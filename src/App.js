import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Ourwork from "./Ourwork";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Services/>}/> */}
        <Route path="/Ourwork" element={<Ourwork/>}/>
        {/* <Route path="/" element={<About/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/" element={<Careers/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
