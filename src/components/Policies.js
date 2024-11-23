import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

function Policies() {
  const temas = [
    {
      titulo: 'Beneficios para Startups',
      imagen: 'beneficios.jpg',
      descripcion:
        'Explora los programas de apoyo que incluyen subvenciones, reducción de impuestos y acceso a infraestructura empresarial, diseñados para el desarrollo óptimo de startups en los sectores clave de la economía.',
    },
    {
      titulo: 'Esquemas de Préstamos',
      imagen: 'prestamos.jpg',
      descripcion:
        'Analiza los esquemas de financiamiento ofrecidos por el gobierno, con los respectivos tipos de interés preferencial o términos flexibles para startups en las etapas iniciales o de crecimiento.',
    },
    {
      titulo: 'Incentivos Fiscales',
      imagen: 'incentivos.jpg',
      descripcion:
        'Los incentivos fiscales radican en el aprendizaje sobre las deducciones respectivas en los temas fiscales de startups, créditos y exenciones disponibles para las diversas empresas emergentes que operan en las áreas de innovación o de impacto social.',
    },
  ];

  const [criterio, setCriterio] = useState('');
  const [temasFiltrados, setTemasFiltrados] = useState(temas);

  const handleSearch = e => {
    e.preventDefault();
    const resultado = temas.filter(tema =>
      tema.titulo.toLowerCase().includes(criterio.toLowerCase())
    );
    setTemasFiltrados(resultado);
  };

  return (
    <Container className="mt-5">
      <h2>Políticas Gubernamentales</h2>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Control
          type="text"
          placeholder="Palabra clave"
          value={criterio}
          onChange={e => setCriterio(e.target.value)}
        />
        <Button variant="primary" type="submit" className="mt-3">
          Buscar
        </Button>
      </Form>
      {temasFiltrados.length > 0 ? (
        <Row>
          {temasFiltrados.map((tema, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`/images/${tema.imagen}`} />
                <Card.Body>
                  <Card.Title>{tema.titulo}</Card.Title>
                  <Card.Text>{tema.descripcion}</Card.Text>
                  <Button variant="primary">Leer más</Button>
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

export default Policies;
