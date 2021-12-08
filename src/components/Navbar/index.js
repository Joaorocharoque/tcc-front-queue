import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  h1Style,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
      
      <h1 style={h1Style}>QueueVet</h1>      
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