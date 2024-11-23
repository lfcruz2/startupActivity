import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));

  return (
    <Container className="mt-5">
      <h2>Bienvenido, {usuario.nombre}</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Perfil</Card.Title>
              <Card.Text>Actualiza tu información personal y la de tu startup.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/profile')}>
                Ir al Perfil
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Buscar Inversores</Card.Title>
              <Card.Text>Encuentra inversores y mentores que se ajusten a tus necesidades.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/search')}>
                Buscar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Políticas Gubernamentales</Card.Title>
              <Card.Text>Explora políticas y beneficios gubernamentales para startups.</Card.Text>
              <Button variant="primary" onClick={() => navigate('/policies')}>
                Ver Políticas
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
