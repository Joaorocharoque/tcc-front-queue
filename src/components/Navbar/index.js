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
          <NavLink to='/TabelaCustomer' activestyle>
            Clientes
          </NavLink>
          <NavLink to='/TabelaSec' activestyle>
            Funcionários
          </NavLink>
          <NavLink to='/TabelaVet' activestyle>
            Veterinários
          </NavLink>
          </NavMenu>
          <NavBtn>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;