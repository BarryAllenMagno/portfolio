import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ChakraProvider>

        <Nav />
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

      </ChakraProvider>
    </>
  );
}

export default App;
