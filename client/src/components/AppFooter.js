import React, { Component} from 'react';
import { Navbar, NavbarBrand, Container, Media, Nav, NavLink, Collapse, NavItem, Button, Badge} from 'reactstrap';

class AppFooter extends Component{
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
        <div>
            <Navbar color="dark" dark className="mb-0" fixed="bottom" align="center" expand="sm">
                <Container>
                    <Badge pill variant="light">Contact</Badge>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="justify-content-end" navbar>
                            <NavItem>
                                <NavLink href="https://twitter.com/euphelectronica" target="_blank">
                                    <img
                                        src="/images/Twitter.png"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        width="30" 
                                        height="30"
                                    />
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="mailTo: euphonicaelectronica@gmil.com" target="_blank">
                                    <img
                                        src="/images/Gmail.ico"
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        width="30" 
                                        height="30"
                                    />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppFooter;