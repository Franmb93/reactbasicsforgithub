import {Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import navStyle from './MainNavigation.module.css';


function MainNavigation(){
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Meetups</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className={navStyle.link} to='/favorites'>Favorites</Link></Nav.Link>
                            <Nav.Link><Link className={navStyle.link} to='/new-meetup'>New Meetup</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </header>
     );

}

export default MainNavigation;