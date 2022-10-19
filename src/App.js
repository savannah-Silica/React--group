import './App.css';
import NavBar from './Components/Nav/NavBar';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='pages'>
        <Home />
      </div>
    </div>
  );
}

export default App;
