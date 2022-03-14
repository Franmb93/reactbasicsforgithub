import {Navbar, Container, Nav} from 'react-bootstrap'

function MainNavigation(){
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Meetups</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/favorites">Favorites</Nav.Link>
                            <Nav.Link href="/new-meetup">New Meetup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </header>
     );

}

export default MainNavigation;