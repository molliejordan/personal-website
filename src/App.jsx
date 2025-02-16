import "./App.css";
import TopAppBar from "./components/TopAppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Resume from "./pages/Resume";
import Interests from "./pages/Interests";
import CuratorsCompass from "./pages/CuratorsCompass";

function App() {
  return (
    <>
      <BrowserRouter basename="/personal-website">
      <div className="min-h-screen flex flex-col w-screen">
        <TopAppBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/curators-compass" element={<CuratorsCompass />} />
            <Route path="/research" element={<Research />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/resume" element={<Resume />} /> 
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
