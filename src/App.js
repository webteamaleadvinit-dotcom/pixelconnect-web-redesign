import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Ourwork from "./Components/Ourwork";
import Service from "./Pages/Service";
=======
import Navbar from "./Navbar";
import Contact from "./Contact";
import Ourwork from "./Ourwork";
>>>>>>> 6cb995f88314471744d51f8a090052cb60c45f1f

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

      <Routes>
<<<<<<< HEAD
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Ourwork" element={<Ourwork/>}/>
        {/* <Route path="/" element={<About/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/" element={<Career/>}/> */}
=======
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Services/>}/> */}
        <Route path="/Ourwork" element={<Ourwork/>}/>
        {/* <Route path="/" element={<About/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/" element={<Careers/>}/> */}
>>>>>>> 6cb995f88314471744d51f8a090052cb60c45f1f
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
