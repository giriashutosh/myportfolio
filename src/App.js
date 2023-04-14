import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Project from './components/DemoProject/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Project/>
    </div>
  );
}

export default App;
