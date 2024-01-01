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
import { BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom'
import Order from './components/Order/Order';

export const Context = createContext();
function App() {

  const {inputRef, focus} = UseFocusManager();

  return (
    <Context.Provider value={{inputRef, focus}}>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={
              <>
                <Header />
                <Home />
                <About />
                <Info />
                <Testinomial />
              </>
            }/>
            <Route path='/order' element={
              <>
                <Header />
                <Order />
              </>
            }/>
          </Routes>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
