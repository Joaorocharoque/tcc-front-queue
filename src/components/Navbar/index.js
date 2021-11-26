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
        <NavLink to='/' activeStyle>
            Fila
          </NavLink>
          <NavLink to='/TabelaSec' activeStyle>
            Secretária
          </NavLink>
          <NavLink to='/TabelaVet' activeStyle>
            Veterinários
          </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;