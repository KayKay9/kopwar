import React, { useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import "./index.css";
import { Container, Row, Col } from 'reactstrap';
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {AiFillGooglePlusCircle} from "react-icons/ai";
import {FaInstagram} from 'react-icons/fa';

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  return (
    <>
    <div className="footer">
      <Container className="section-padding-y" align="left">
      <Row>
          <Col lg="7" className="mb-4">
            <img src={logo} className="flogo img-fluid" alt="Logo" />
            <p className="mw255 text-grey">
            KOPWAR is an online store. Begin as a foodservice provider to business and other service. By using our app, you will never need to go to Market and get your hand dirty.
            </p>
          </Col>
          <Col lg="5">
            <h5 class="mb-4">Contact Info</h5>
            <p className="text-grey">Shwe Hintha Road 2, No. 58, Hlaing Township,Yangon </p>
            <p><a className="footerlink" href="tel:09447407050">09447407050</a></p>
            <p><a className="footerlink" href="mailto:sane.l.wunn@gmail.com">sane.l.wunn@gmail.com</a></p>
            <div className="social">
                <a className="social-link" href="https://m.facebook.com/kopwarmm/?comment_id=Y29tbWVudDoxNTIzNTk2MTYyODYwMzhfMTUyNzA2Nzc5NTg0NjU1"><FaFacebookF /></a>
                <a className="social-link" href="#"><FaTwitter /></a>
                <a className="social-link" href="#"><AiFillGooglePlusCircle /></a>
                <a className="social-link" href="#"><FaInstagram /></a>
            </div>
          </Col>
      </Row>
    </Container>    
    </div>
    <div className='copyright'>
        <Container className="container text-center py-4">
            <p className='text-grey text-sm'> Copyright © Kopwar Website {(new Date().getFullYear())}.</p>
        </Container>
    </div>
    </>
  );
}

export default Footer;