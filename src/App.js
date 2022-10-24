import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import NavBar from "./Components/Nav/NavBar";
import Contact from "./Components/Pages/Contact/Contact"
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
	return (
		<div className="container">
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contacts" element={<Contact />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
