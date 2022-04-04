import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/About' exact component={About} />
            <Route path='/Projects' exact component={Projects} />
            <Route path='/Contact' exact component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
