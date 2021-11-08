import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import style from '../css/Dashboard.module.css';
import Footer from './Footer';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
      <Navbar className={style.navbar}  expand="lg"> 
  <Container>
    <Navbar.Brand href="#home"><img alt=" " className={style.imglogo} src="https://www.clipartmax.com/png/full/203-2035601_uzbekistans-emblem-uzbekistan-gerb-png.png"/> </Navbar.Brand>
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

{/* Asosiy qism */}
<div id="home" className={style.asosiy}>
 
<div className={style.rahbar}>


        
        <div className={style.oyna}>
<img alt=" " src="https://telegra.ph/file/37c9140e82eba1db37cb4.jpg"  />
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

{/* videolavhalar */}

<div className={style.video}>

  <div className={style.cardvideo}>
    <h1 >Videolavhalar</h1>
<Row >
<Col lg={4} md={6} sm={12} className={style.col} >

  <Card  >
  <iframe className={style.ifre} title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card>
</Col>
<Col lg={4} md={6} sm={12} className={style.col}>  <Card  >
  <iframe className={style.ifre}  title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card></Col>
<Col lg={4} md={6} sm={12} className={style.col}>  <Card  >
  <iframe className={style.ifre} title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card></Col>
<Col lg={4} md={6} sm={12} className={style.col}>  <Card  >
  <iframe className={style.ifre} title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card></Col>
<Col lg={4} md={6} sm={12} className={style.col}>  <Card  >
  <iframe className={style.ifre} title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card></Col>
<Col lg={4} md={6} sm={12} className={style.col}>  <Card  >
  <iframe className={style.ifre} title=" " 
src="https://www.youtube.com/embed/Hz13r28Kc">
</iframe> 
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card></Col>
</Row>
<h3>Barcha videolarni ko`rish</h3>
</div>

</div>




{/* Homiylarimiz */}
<div class={style.slider}>
  <h1 style={{margin:'auto',textAlign:'center',marginTop:'20px',marginBottom:'20px'}}>Homiylarimiz</h1>
	<div class={style.slidetrack}>
    
  <div className={style.slide}>
			<img  height="100" width="100" alt=" " />
		</div>
   
	
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className={style.slide}>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
	
		
	</div>
</div>
<Footer/>
      </div>
    )
  }
}
