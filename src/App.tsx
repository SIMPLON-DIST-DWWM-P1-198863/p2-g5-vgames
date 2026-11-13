import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import "./App.css"
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalog />} />
        <Route path="/contact" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;