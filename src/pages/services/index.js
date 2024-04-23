import React from 'react';
import Menu from "../../components/header";
import { Container, Row, Col } from 'reactstrap';
import './index.css';
import { FiShoppingCart } from 'react-icons/fi';
import {GiLifeBar} from 'react-icons/gi';
import {GiArcheryTarget} from 'react-icons/gi';
import { Element} from 'react-scroll';

export default function Service() {
  
  return (
    <>
    <Element name="services" className="fake-height">
    <div className="servicebg section py-0" align="left" id="services" name="services">
      <Container>
      <Row>
          <Col>
          <p className="text-uppercase text-service">Services</p>
          <h2 className="mb-5 title">Kopwar Services</h2>
          </Col>
      </Row>
        <Row className="py-5">
          <Col md="4" align="left">
                <div className="servicebox border-0 shadow rounded-lg py-4 text-left">
                    <FiShoppingCart className="sericon color1" />
                    <h3 className="font-weight-normal h4 my-4">Kopwar Mart</h3>
                    <p>KOPWAR is an online store. Begin as a foodservice provider to business and other service. By using our app, you will never need to go to Market and get your hand dirty. *Currently available in Yangon</p>
                </div>
          </Col>
          <Col md="4">
                <div className="servicebox border-0 shadow rounded-lg py-4 text-left">
                    <GiLifeBar className="sericon color2" />
                    <h3 className="font-weight-normal h4 my-4">Kopwar Life</h3>
                    <p>Now we opened KOPWAR ACADEMY for Student (Online Learning System)</p>
                </div>
          </Col>
          <Col md="4" align="left">
                <div className="servicebox border-0 shadow rounded-lg py-4 text-left">
                    <GiArcheryTarget className="sericon color3" />
                    <h3 className="font-weight-normal h4 my-4">Kopwar Services Provider</h3>
                    <p>With our fair and transparent pricing, you know you’ll always get a good deal.</p>
                </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Element>
    </>
  );
}
