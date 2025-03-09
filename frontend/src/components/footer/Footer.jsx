import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";

const quick_links=[
  {
    path:'/home',
    display:'home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'tour'
  }
]

const quick_links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]


const Footer = () => {
  const year=new Date().getFullYear()
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg='3'>
              <div className="logo">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Error, under
                </p>
                <div className="social__links">
                  <span>
                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                  </span>
                  <span>
                    <Link to='https://github.com/BilelHbibi' target="_black"><i class="ri-github-fill"></i></Link>
                  </span>
                  <span>
                    <Link to='https://www.facebook.com'  target="_black"><i class="ri-facebook-circle-line"></i></Link>
                  </span>
                  <span>
                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg='3'>
              <h5 className="footer__link-title">Discover</h5>
              <ListGroup className="footer__quick-links">
                {
                  quick_links.map((item,index)=>(
                    <ListGroupItem key={index} className="border-0 ps-0">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>

            </Col>
            <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup className="footer__quick-links">
                {
                  quick_links2.map((item,index)=>(
                    <ListGroupItem key={index} className="border-0 ps-0">
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </Col>
            <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>
              <ListGroup className="footer__quick-links">
                    <ListGroupItem className="border-0 ps-0 d-flex align-items-center gap-3">
                      <h6 className="d-flex mb-0 align-items-center gap-2">
                        <span><i class="ri-map-pin-line"></i></span>
                        Address:
                      </h6>
                      <p className="mb-0">Mornaguia,Fajja</p>
                    </ListGroupItem>
              </ListGroup>

              <ListGroup className="footer__quick-links">
                    <ListGroupItem className="border-0 ps-0 d-flex align-items-center gap-3">
                      <h6 className="d-flex mb-0 align-items-center gap-2">
                        <span><i class="ri-mail-line"></i></span>
                        Email:
                      </h6>
                      <p className="mb-0">dev.bilel@gmail.com</p>
                    </ListGroupItem>
              </ListGroup>

              <ListGroup className="footer__quick-links">
                    <ListGroupItem className="border-0 ps-0 d-flex align-items-center gap-3">
                      <h6 className="d-flex mb-0 align-items-center gap-2">
                        <span><i class="ri-phone-line"></i></span>
                        Phone:
                      </h6>
                      <p className="mb-0">+216 01234567</p>
                    </ListGroupItem>
              </ListGroup>
            </Col>

            <Col lg='12' className="pt-5">
              <p className="copyright">
                Copyright {year}, design and develop by Bilel Hbibi,All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
