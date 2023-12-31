import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import img from './img/toro4art-logo.png';

class Header extends React.Component {
    render() {
        const classes = "header " + this.props.additionalClass;
        return (
            <React.Fragment>
            <Navbar expand="lg">
              <Navbar.Brand href="/">
                      <img id="header-logo" src={img} weight="40" height="80" alt="Toro4Art logo"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Paintings">
                        <NavDropdown.Item href="/commissions/watercolor">Watercolor</NavDropdown.Item>
                        <NavDropdown.Item href="/commissions/oil">Oil</NavDropdown.Item>
                    </NavDropdown>
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