import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import inversoresData from '../data/inversores';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [criterio, setCriterio] = useState('');
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setResultados(inversoresData);
  }, []);

  const handleSearch = e => {
    e.preventDefault();
    const resultadosFiltrados = inversoresData.filter(
      inv =>
        inv.nombre.toLowerCase().includes(criterio.toLowerCase()) ||
        inv.categorias.some(cat => cat.nombre.toLowerCase().includes(criterio.toLowerCase()))
    );
    setResultados(resultadosFiltrados);
  };

  return (
    <Container className="mt-5">
      <h2>Buscar Inversores/Mentores</h2>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Control
          type="text"
          placeholder="Criterio de búsqueda"
          value={criterio}
          onChange={e => setCriterio(e.target.value)}
        />
        <Button variant="primary" type="submit" className="mt-3">
          Buscar
        </Button>
      </Form>
      {resultados.length > 0 ? (
        <Row>
          {resultados.map(inv => (
            <Col md={6} lg={4} key={inv.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{inv.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{inv.categorias.map(cat => cat.nombre).join(', ')}</Card.Subtitle>
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/investor/${inv.id}`)}
                  >
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </Container>
  );
}

export default Search;
