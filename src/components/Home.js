import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <h1 className="display-4 mb-4">Bienvenido a StartupNexus</h1>
        <p className="lead">
          StartupNexus es una plataforma innovadora que conecta a emprendedores con inversores y mentores de todo el mundo.
          Nuestro objetivo es facilitar el acceso a financiamiento, mentoría y recursos esenciales para transformar ideas en negocios exitosos.
          A través de StartupNexus, los emprendedores pueden presentar sus proyectos, recibir retroalimentación valiosa y acceder a oportunidades de inversión,
          mientras que los inversores pueden descubrir y apoyar las startups más prometedoras.
        </p>
        <div className="mt-4">
          <Link to="/register">
            <Button variant="primary" size="lg" className="me-3">
              Regístrate
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary" size="lg">
              Inicia Sesión
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
