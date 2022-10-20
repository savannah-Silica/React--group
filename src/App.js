import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import NavBar from "./Components/Nav/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
