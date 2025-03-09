import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import AddArtwork from "./pages/AddArtwork";
import "./styles/base/main.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/add" element={<AddArtwork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
