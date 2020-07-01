import React, { Component} from 'react';
import ReactGA from 'react-ga';
import { Navbar, Container, Nav, NavLink, NavItem} from 'reactstrap';

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
                    <Nav className="justify-content-end" navbar/>
                    <Nav className="justify-content-end" navbar-expand>
                        <NavItem>
                            <NavLink>
                            <ReactGA.OutboundLink eventLabel="Github - Shreyasc27/Euphonic-Electronica" to="https://github.com/Shreyasc27/Euphonic-Electronica#euphonic-electronica" target="_blank">
                                <img
                                    src="/images/Github.png"
                                    alt="Github"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </ReactGA.OutboundLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            <ReactGA.OutboundLink eventLabel="Twitter - Euphonic Electronica" to="https://twitter.com/euphelectronica" target="_blank">
                                <img
                                    src="/images/Twitter.png"
                                    alt="Twitter"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </ReactGA.OutboundLink>
                            </NavLink>
                        </NavItem>
                        {<NavItem>
                            <NavLink>
                            <ReactGA.OutboundLink eventLabel="Instagram - EuphonicElectronica" to="https://instagram.com/euphonicelectronica" target="_blank">
                                <img
                                    src="/images/Instagram.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    width="30" 
                                    height="30"
                                />
                            </ReactGA.OutboundLink>
                            </NavLink>
                        </NavItem> }
                    </Nav>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppFooter;