import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Project from './components/DemoProject/Project';
import Experience from './components/Experience/Experience';
import Work from './components/Works/Work'
import Portfolio from './components/MyPortfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Project />
      <Experience />
      <Work />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
