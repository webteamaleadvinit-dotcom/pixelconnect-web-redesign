import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import ScrollToTop from "./Components/ScrollToTop";
import Careers from "./Pages/Careers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphic" element={<GraphicDesignPage />} />
          <Route path="/careers" element={<Careers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
