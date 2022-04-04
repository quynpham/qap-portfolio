import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <main>
        {/* <Navbar /> */}
        <Home/>
        <About/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
