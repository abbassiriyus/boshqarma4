import React, { Component } from 'react'
import Navbar1 from "../js/Navbar1"
import Footer from './Footer' 
import style from '../css/Tumanlar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

export default class Tumanlar extends Component {
    render() {
        return (
            <div>
           <Navbar1/> 
<div className={style.div}>
<div className={style.div1}>
<img src="https://th.bing.com/th/id/R.63ba161d2c5b516f50131479561f9dea?rik=8u8Ow3WkJzEBwQ&riu=http%3a%2f%2fperego-shop.ru%2fgallery%2fimages%2f1242730_uzbekistan-flag-gerb.jpg&ehk=Mkg0gmKPZ6RsQUC8V9gUyTIXqer5zMYadySTLVpA%2bd4%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
<p>Jizzax Xalq Talim Vazirligi Tumanlari </p>

</div>
</div>
<div className={style.Kard}>
<center><h1>TUMANLAR</h1></center>
<Container>
    <Row>
        <Col>
<Card className="text-dark" id={style.ret}>
  <Card.Img src="https://th.bing.com/th/id/OIP.bqp9ABaJcxsDk5Q2cxf_XwHaE0?pid=ImgDet&w=889&h=578&rs=1" alt="Card image" />
  <Card.ImgOverlay>
  <div className={style.hover}>
    <Card.Title className={style.c}>Tumanlar</Card.Title>
    <Card.Text className={style.a}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className={style.b}>Last updated 3 mins ago</Card.Text>
 </div>
  </Card.ImgOverlay>
</Card>
</Col>
<Col>
<Card className=" text-dark" id={style.ret}>
  <Card.Img src="https://th.bing.com/th/id/OIP.bqp9ABaJcxsDk5Q2cxf_XwHaE0?pid=ImgDet&w=889&h=578&rs=1" alt="Card image" />
  <Card.ImgOverlay>
   <div className={style.hover}>
    <Card.Title className={style.c}>Tumanlar</Card.Title>
    <Card.Text className={style.a}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className={style.b}>Last updated 3 mins ago</Card.Text>
  </div>
  </Card.ImgOverlay>
</Card>
</Col>
<Col>
<Card className="text-dark" id={style.ret}>
  <Card.Img src="https://th.bing.com/th/id/OIP.bqp9ABaJcxsDk5Q2cxf_XwHaE0?pid=ImgDet&w=889&h=578&rs=1" alt="Card image" />
  <Card.ImgOverlay>
  <div className={style.hover}>
    <Card.Title className={style.c}>Tumanlar</Card.Title>
    <Card.Text className={style.a}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className={style.b}>Last updated 3 mins ago</Card.Text>
</div>
</Card.ImgOverlay>
</Card>
</Col>
</Row>
</Container>
</div>

           <Footer/>    
            </div>
        )
    }
}
