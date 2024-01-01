import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Info from './components/Info/Info';
import Testinomial from './components/Testinomial/Testinomial';
import UseFocusManager from './hooks/UseFocusManager';
import { createContext } from 'react';

export const Context = createContext();
function App() {
  const {inputRef, focus} = UseFocusManager();
  return (
    <Context.Provider value={{inputRef, focus}}>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Info />
        <Testinomial />
      </div>
    </Context.Provider>
  );
}

export default App;
