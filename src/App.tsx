import Header from "./components/header";
import Footer from "./components/footer";
import SelectedGame from "./components/selected-game";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <SelectedGame />
      </main>
      <Footer />
    </>
  );
}

export default App;
