import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
         <h1>QueueVet</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Sobre
          </NavLink>
          <NavLink to='/services' activeStyle>
            Serviços
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contato
          </NavLink>
          <NavLink to='/tabela' activeStyle>
            Tabela
          </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;