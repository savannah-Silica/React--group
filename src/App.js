import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import NavBar from "./Components/Nav/NavBar";
import Contact from "./Components/Pages/Contact/Contact"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ContactUs" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
