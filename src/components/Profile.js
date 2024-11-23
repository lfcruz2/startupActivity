import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

function Profile() {
  const [perfil, setPerfil] = useState({ descripcion: '', sector: '', necesidades: '' });
  const usuario = JSON.parse(localStorage.getItem('usuarioActivo'));

  useEffect(() => {
    if (usuario && usuario.perfil) {
      setPerfil(usuario.perfil);
    }
  }, [usuario]);

  const handleSubmit = e => {
    e.preventDefault();
    usuario.perfil = perfil;
    localStorage.setItem('usuarioActivo', JSON.stringify(usuario));

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = usuarios.findIndex(u => u.email === usuario.email);
    if (index !== -1) {
      usuarios[index] = usuario;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }

    alert('Perfil actualizado');
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Mi Perfil</h2>
      <Card>
        <Card.Body>
          <Card.Title>{usuario.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{usuario.email}</Card.Subtitle>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe tu startup"
                value={perfil.descripcion}
                onChange={e => setPerfil({ ...perfil, descripcion: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="sector" className="mt-3">
              <Form.Label>Sector</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sector de tu startup"
                value={perfil.sector}
                onChange={e => setPerfil({ ...perfil, sector: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="necesidades" className="mt-3">
              <Form.Label>Necesidades</Form.Label>
              <Form.Control
                type="text"
                placeholder="Necesidades de financiamiento o mentoría"
                value={perfil.necesidades}
                onChange={e => setPerfil({ ...perfil, necesidades: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Guardar Cambios
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
