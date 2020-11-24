import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/house/css/styles.css';
import '../src/house/js/main.js';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Navbar1 from './components-portfolio/Navbar1';
import Home1 from './components-portfolio/Home1';
import About1 from './components-portfolio/About1';
import Skills from './components-portfolio/Skills';
import Projects from './components-portfolio/Projects';
import Contact1 from './components-portfolio/Contact1';
import Footer1 from './components-portfolio/Footer1';
import Footer from './components/Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
  <>
  <Navbar1 />
  <main class="l-main">
  <Home1 />
  <About1 />
  <Skills />
  <Projects />
  <Contact1 />
  <Footer1 />
    {/* <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
    <Footer /> */}
    </main>
  </>
  );
}

export default App;
