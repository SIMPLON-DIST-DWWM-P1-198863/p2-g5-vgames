import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Favoris from "./pages/favoris";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
