import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar.js";
import Demo from "./component/pages/Demo";
import Home from "./component/pages/Home";
import Keyfeature from "./component/pages/Keyfeature";
import Pricing from "./component/pages/Pricing";
import Testimonial from "./component/pages/Testimonial";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/keyfeature" element={<Keyfeature />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
