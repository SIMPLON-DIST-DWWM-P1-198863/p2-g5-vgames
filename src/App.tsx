import Header from "./components/header";
import Footer from "./components/footer";
import SelectedGame from "./components/selected-game";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <SelectedGame />
      </main>
      <Home />
      <Footer />
    </>
  );
}

export default App;
