import React from 'react';
import { Nav } from 'react-bootstrap';
import barLogo from '../../images/Logo.png';
import './Header.css';


//for control header..it is just show off.it isnot work.
const Header = () => {
    return (
        <div>
      <Nav className="justify-content-center">
      <Nav.Item>
      <Nav.Link href="/home"><img id="header-highlight" src={barLogo} alt=""/></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/home"><input placeholder='Search your Destination' type="text"/></Nav.Link>
    </Nav.Item>
    <Nav.Item >
      <Nav.Link href="/home"className="MenuItem" >News</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" className="MenuItem" >Destination</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2"  className="MenuItem">Blog</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"  className="MenuItem">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/login" eventKey="link-2"><button id="button-highlight">Log In</button></Nav.Link>
    </Nav.Item>

  </Nav>
        </div>
    );
};

export default Header;