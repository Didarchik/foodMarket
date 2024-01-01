import React, {useRef, useState, useContext} from 'react'
import style from './Header.module.scss'
import MyPhoto from "../../assets/bag.png"
import logo from "../../assets/FOODIE.svg"
import {Button, Card, Accordion, ProgressBar, Navbar, Container, Nav} from "react-bootstrap"
import { Context } from '../../App'
import { Link } from "react-router-dom" 

function Header() {
  const [toggle, setToggle] = useState(false);
  const handle = () => {
    setToggle(prev => !prev);
    console.log(toggle);
  }

  const {inputRef, focus} = useContext(Context);
  return (
    <div className='header'>
      <Navbar expand='lg' data-bs-theme="light" expanded={toggle}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handle}/>
          <Navbar.Collapse>
          <Nav className='ms-auto'>
            <Nav.Link href="#home" className="fs-5 navLink" onClick={focus}>Негізгі</Nav.Link>
            <Nav.Link href="#about" className="fs-5 navLink" onClick={focus}>Біз жайлы</Nav.Link>
            <Nav.Link href='#contact' className="fs-5 navLink" onClick={focus}>Деректер</Nav.Link>
            <Nav.Link href="#test" className='fs-5 navLink' onClick={focus}>Тестиномдар</Nav.Link>
            <Nav.Link href='#hz' className="fs-5 navLink"><img src={MyPhoto} style={{width: 20, height: 20}}/></Nav.Link>
            <Link to="/order"><Button variant='primary' className='btn1 fs-5'>Заказ беру</Button></Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header