import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyInternWithUs from "./components/WhyInternWithUs";
import ReadyToJoinUs from "./components/ReadyToJoinUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<WhyChooseUs />} />
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

export default App;
