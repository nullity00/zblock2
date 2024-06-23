import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./modules/Navbar";
import Zbloc2kPage from "./pages/Zblock2";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col bg-white text-black w-full font-default">
        <Navbar />
        <Routes>
          <Route path="/" element={<Zbloc2kPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
