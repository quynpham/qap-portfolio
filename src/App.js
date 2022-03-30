import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <header className="text-green-900 bg-pink-200 h-52 md:h-96">
        <div className="wrapper pt-10 px-10 lg:pt-20 lg:pb-10 lg:px-20">
          <h1 className="text-base md:text-lg lg:text-3xl">Hi, I'm Quynh Anh !</h1>
          <h1 className="text-base md:text-lg lg:text-3xl">I'm a <strong className="text-base md:text-lg lg:text-3xl">fullstack web developer</strong></h1>
          <span className="container-flip h-8 lg:h-14">
            <span className="flip text-base md:text-lg lg:text-3xl">and coffee addict ☕</span>
            <span className="flip text-base md:text-lg lg:text-3xl">and cat lover 🐾</span>
            <span className="flip text-base md:text-lg lg:text-3xl">and choir singer 🎙</span>
            <span className="flip text-base md:text-lg lg:text-3xl">and sewista 🧵</span>
            <span className="flip text-base md:text-lg lg:text-3xl">and spicy food eater 🌶</span>
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
