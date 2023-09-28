import './App.css';
import { Navbar, Footer } from './components';
import { Home, About, Skills, Projects, Contact } from './container';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
