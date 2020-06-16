import React, { Component} from 'react';
import { Navbar, NavbarBrand, Container} from 'reactstrap';

class AppNavbar extends Component{
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
            <Navbar color="dark" dark expand="sm" className="mb-5" fixed="top">
                <Container>
                    <Navbar bg="dark" variant="dark">
                        <img
                            src="images/favicon.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Euphonic Electronica Logo"
                            width="30" 
                            height="30"
                        />
                        <NavbarBrand>  </NavbarBrand>
                        <NavbarBrand>Euphonic Electronica</NavbarBrand>
                    </Navbar>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;