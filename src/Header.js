import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



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
                  <a href="#">
                      <img src="https://facebook.github.io/react/img/logo.svg" weight="40" height="40"/>
                        ARToro
                  </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Project</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
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