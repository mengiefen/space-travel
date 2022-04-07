import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const NavItems = [
    {
      link: '/',
      name: 'Rocket',
    },
    {
      link: 'missions',
      name: 'Missions',
    },
    {
      link: 'my-profile',
      name: 'My Profile',
    },
  ];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo-img" alt="logo" />
            Space Traveler&apos;s Hub
          </Navbar.Brand>
          <Nav>
            {NavItems.map((navItem) => (
              <NavLink
                to={navItem.link}
                key={navItem.link}
                className={({ isActive }) => {
                  if (isActive) return 'nav-link active';
                  return 'nav-link';
                }}
              >
                {navItem.name}
              </NavLink>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
