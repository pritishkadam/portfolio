import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import SocialLinks from './components/SocialLinks/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
