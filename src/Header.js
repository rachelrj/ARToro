import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/artoro.png';



class Header extends React.Component {
    state = {

    }

    componentDidMount() {

    }

    getData() {

    }

    render() {

        const classes = "header " + this.props.additionalClass;

        return (
            <React.Fragment>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/">
                      <img id="header-logo" src={img} weight="40" height="80"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Portfolio">
                        <NavDropdown.Item href="/watercolor">Watercolor</NavDropdown.Item>
                        <NavDropdown.Item href="/oil">Oil</NavDropdown.Item>
                        <NavDropdown.Item href="/miscellaneous">Miscellaneous</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/store">Store</Nav.Link>
                    <Nav.Link href="/private-art-instruction">Private Art Instruction</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
               </Navbar.Collapse>
            </Navbar>
            {
                this.props.additionalClass &&
                    <div className={classes}/>
            }
            </React.Fragment>
        );
    }
}

export default Header;