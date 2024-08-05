import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ContactUs } from "../src/pages/ContactUs";
import { Projects } from "../src/pages/Projects";
import { Neeta } from "../src/pages/Neeta";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <div className='App'  >
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="projects/neeta_residency" element={<Neeta />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;
