import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import style from '../css/Navbar1.module.css';

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
      <Navbar className={style.navbar} expand="lg"> 
  <Container>
    <Navbar.Brand href="#home"><img className={style.imglogo} src="https://www.clipartmax.com/png/full/203-2035601_uzbekistans-emblem-uzbekistan-gerb-png.png"/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="me-auto" id={style.Nav} >
        <Nav.Link className={style.sahifa} href="#home">Bosh sahifa</Nav.Link>
        <Nav.Link className={style.sahifa} href="#link">Yangiliklar</Nav.Link>
        <Nav.Link className={style.sahifa} href="#link">Rahbariyat</Nav.Link>
        <Nav.Link className={style.sahifa} href="#link">Tumanlar</Nav.Link>
        <Nav.Link className={style.sahifa} href="#link">Maktablar</Nav.Link>
        <Nav.Link className={style.sahifa} href="#link">Bog`lanish</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    )
  }
}
