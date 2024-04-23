import React, { useState } from 'react';
import Menu from "../../components/header";
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import { FaGooglePlay } from 'react-icons/fa';
import {IoLogoAppleAppstore} from 'react-icons/io5';
import mobileimage from '../../assets/images/mobile2.jpg';
import { Element,Link} from 'react-scroll';
import {BsArrowUp} from 'react-icons/bs';


export default function Home() {
  const [offset, setOffset] = useState(0);
  const [navbg, setNavbg] = useState(0);
  const [scrollto, setScrollto] = useState(0);

  window.onscroll = () => {
    setOffset(window.pageYOffset)
    if(offset>=10){
      setNavbg(1);
    }else{
      setNavbg(0);
    }
    if(offset>=50){
      setScrollto(1);
    }else{
      setScrollto(0);
    }
  }
  return (
    <>
    <Menu navbg={navbg} />
    <Element name="home" className="fake-height">
    <div className="homebg section" id="home"  >
      <Container>
        <Row className="py-5">
          <Col lg="6" className="py-5" align="left">
              <h1 className="font-weight-bold nonefont" align="left">Download your Kopwar App</h1>
              <p class="my-4 text-muted">Please download and install on your phone ..! Thanks</p>
              <div className="btnbox">
                <a className="btn btn-warning google btn-lg px-4" href="https://play.google.com/store/apps/details?id=app001.kopwar.com.mm">
                <FaGooglePlay className="mr10" />Google Play
                </a>
                <a className="btn btn-warning btn-lg px-4" href="https://appgallery.huawei.com/#/app/C104468545">
                For Huawei Phone
                </a>
                
                </div>
                <br/>
                <h3 className="font-weight-bold nonefont"><IoLogoAppleAppstore className="mr10" />Coming Soon Apple Store</h3>
          </Col>
          <Col lg="6">
            <div className="mobile-wrapper mx-auto">
                <div className="mobile shadow">
                    <div className="mobileinner">
                      <img src={mobileimage} className="img-fluid" />
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Link smooth={true} className={ (scrollto) ? "scropll-top-btn active" : "scropll-top-btn"} to="home" ><BsArrowUp /></Link>
    </div>
      </Element>
    </>
  );
}
