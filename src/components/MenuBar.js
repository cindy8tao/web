import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "shards-react";
import { Link } from "react-router-dom"; // Import Link from React Router
import '../css/menu.css'; // Import the CSS file

class MenuBar extends React.Component {
  render() {
    return (
      <div className="menu-bar-container">
        <Navbar type="dark" theme="black" expand="xl">
          <Nav navbar className="menu-bar-nav">
            <NavItem>
              <NavLink active>
                <Link to="/" className="menu-bar-link">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>
                <Link to="/about" className="menu-bar-link">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>
                <Link to="/resume" className="menu-bar-link">Resume</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>
                <Link to="/projects" className="menu-bar-link">Projects</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active>
                <Link to="/contact" className="menu-bar-link">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MenuBar;

