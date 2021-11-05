import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Container, Nav, Navbar } from 'react-bootstrap';
import style from '../css/Dashboard.module.css'
export default class Dashboard extends Component {
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
<div className={style.asosiy}>
 
<div className={style.rahbar}>


  <div className={style.oyna}>
<img src="https://telegra.ph/file/37c9140e82eba1db37cb4.jpg"  />
<h1>Inson haddan tashqari ko‘p </h1>
<h3>gapirsa, bu uning o‘ziga ishonmasligidan dalolat berishi ham mumkin. Yaxshi rahbar o‘z xodimining fikrini bayon qilishiga imkon beradi, chunki u uchun xodimlarining fikrlari haqiqatda qiziq. Rahbar ularni o‘ylashga undaydigan va ishning mohiyatini chuqurroq anglab yetishga yordam beradigan qiziq savollar beradi. Bu qanday tuzilgan? Sizga uning nimasi yoqdi? Bundan qanday saboq oldingiz? Bu ishni yanada yaxshi bajarishingiz uchun nima kerak bo‘ladi?</h3>

  </div>





</div><div className={style.yangili}>
<div style={{paddingBottom:'10px'}} className={style.yangilik}>
  <h1>Yangiliklar</h1>
   <Accordion style={{marginLeft:'10px', }} defaultActiveKey="0">
  <Accordion.Item  >
    <Accordion.Header className={style.accordionheader}>Accordion Item #1</Accordion.Header>
    <Accordion.Body className={style.accordionbody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className={style.accordionheader}>Accordion Item #2</Accordion.Header>
    <Accordion.Body className={style.accordionbody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header className={style.accordionheader}>Accordion Item #2</Accordion.Header>
    <Accordion.Body className={style.accordionbody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header className={style.accordionheader}>Accordion Item #2</Accordion.Header>
    <Accordion.Body className={style.accordionbody}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

</div>
</div>






</div>
      </div>
    )
  }
}
