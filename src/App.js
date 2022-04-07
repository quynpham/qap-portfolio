import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </main>
      </div>
  );
}

export default App;
