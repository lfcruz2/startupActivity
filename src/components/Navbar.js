import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function AppNavbar() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));

  const handleLogout = () => {
    localStorage.removeItem('usuarioActivo');
    navigate('/');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">Startup Meet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {usuario ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                <Nav.Link as={Link} to="/search">Buscar Inversores</Nav.Link>
                <Nav.Link as={Link} to="/policies">Políticas</Nav.Link>
                <Nav.Link onClick={handleLogout}>Cerrar Sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
