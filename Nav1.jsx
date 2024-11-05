import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img1 from './bleach.jpeg';
import img2 from './Jujutsu Kaisen.jpeg';
import img3 from './my hero academia.jpeg';
import img4 from './naruto.jpeg';
import img5 from './tokyo ghoul.jpeg';
import title1 from './narutotitle.jpeg';
import title2 from './demontitle.jpeg';
import title3 from './vinlandtitle.jpeg';
import { Link } from 'react-router-dom';





function Nav1() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Animewatch</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/Home"><Nav.Link>Home</Nav.Link></Link>
              <Nav.Link href="#action2">Genre</Nav.Link>
              <NavDropdown title="genre" id="navbarScrollingDropdown " className="d-flex flex-row" >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Adventure
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Horror
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Thriller
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Romance
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  isekai
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  comedy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  mecha
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  tsundre
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Fantasy
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title1}
            alt="First slide"
            width={500}
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title2}
            alt="Second slide"
            width={500}
            height={500}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={title3}
            alt="Third slide"
            width={500}
            height={500}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='d-flex flex-row'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img1} height={400} width={200} />
          <Card.Body>
            <Link to="\Home"><Button variant="primary">Go somewhere</Button></Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img2} height={400} width={200} />
          <Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img3} height={400} width={200} />
          <Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img4} height={400} width={200} />
          <Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img5} height={400} width={200} />
          <Card.Body>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Nav1;
