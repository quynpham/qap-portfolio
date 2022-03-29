import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="text-green-900 bg-pink-200">
        <div className="wrapper text-lg">
          <h1 className="text-lg">Hi, I'm Quynh Anh !</h1>
          <h1 className="text-lg">I'm a <strong className="text-lg">fullstack web developer</strong></h1>
          <span className="container-flip text-lg">
            <span className="flip text-lg">and coffee addict ☕</span>
            <span className="flip text-lg">and cat lover 🐾</span>
            <span className="flip text-lg">and choir singer 🎙</span>
            <span className="flip text-lg">and sewista 🧵</span>
            <span className="flip text-lg">and spicy food eater 🌶</span>
          </span>
        </div>
      </header>
      <main>
        {/* <Navbar /> */}
         <About/>
        {/* <Skills /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
