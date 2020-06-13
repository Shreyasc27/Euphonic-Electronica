import React, { Component} from 'react';
import { Navbar, NavbarBrand, Container, Media} from 'reactstrap';

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
            <Navbar color="dark" dark expand="sm" className="mb-4">
                <Container>
                    <NavbarBrand href="/" align="center">
                        Euphonic Electronica
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;