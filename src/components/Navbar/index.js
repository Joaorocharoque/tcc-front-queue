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
        <NavLink to='/' activestyle>
            Fila
          </NavLink>
          <NavLink to='/TabelaSec' activestyle>
            Secretária
          </NavLink>
          <NavLink to='/TabelaVet' activestyle>
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