import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function RenderBotoes(props) {
    if (props.isLoggedIn) {
        return <RenderBotoesPrivados/>;
    } else {
        return <RenderBotoesPublicos/>;
    }
};

const RenderBotoesPrivados = () => (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink exact className="nav-link" to="/">
          Meu Perfil
        </NavLink>
        <NavLink exact className="nav-link" to="/configuracao">
          Configuração
        </NavLink>
      </Nav>
      <Nav className="justify-content-end" defaultActiveKey="/home">
        <NavLink exact className="nav-link" to="/logout">
          Logout
        </NavLink>
      </Nav>
    </Navbar.Collapse>
);

const RenderBotoesPublicos = () => (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end" defaultActiveKey="/home">
        <NavLink exact className="nav-link" to="/login">
            Login
        </NavLink>
    </Nav>
  </Navbar.Collapse>
);

const Cabecalho = (props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>Elo Twitter</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <RenderBotoes isLoggedIn={props.logged}/>
  </Navbar>     
)

export default Cabecalho;