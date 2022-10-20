import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Nav/NavBar';
import Home from './Components/Pages/Home/Home';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (<>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>)
  // (
  //   <div className="App">
  //     <NavBar />
  //     <div className="pages">
  //       <Home />
  //     </div>
  //   </div>
  // );
}

export default App;
