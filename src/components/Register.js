import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function Register() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [cc, setCC] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nombre, cc, email, telefono, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso');
    navigate('/login');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Registro</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="cc" className="mt-3">
              <Form.Label>Cédula de Ciudadanía (CC)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu número de identificación"
                value={cc}
                onChange={e => setCC(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="telefono" className="mt-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Crear una Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Crea una contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmarPassword" className="mt-3">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmarPassword}
                onChange={e => setConfirmarPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
