import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Table, Form } from 'react-bootstrap';
import inversoresData from '../data/inversores';
import { FaStar, FaRegStar } from 'react-icons/fa';


function InvestorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const inversor = inversoresData.find(inv => inv.id === parseInt(id));

  const [selectedMethods, setSelectedMethods] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  if (!inversor) {
    return <p>Inversor no encontrado.</p>;
  }

  const handleMethodChange = e => {
    const method = e.target.value;
    setSelectedMethods(prevMethods =>
      prevMethods.includes(method)
        ? prevMethods.filter(m => m !== method)
        : [...prevMethods, method]
    );
  };

  const handleContact = () => {
    const info = `
      Has contactado a ${inversor.nombre}
      Métodos de asesoría seleccionados: ${selectedMethods.join(', ')}
    `;
    alert(info);
  };

  return (
    <Container className="mt-5">
      <Button variant="secondary" onClick={() => navigate(-1)}>
        Regresar
      </Button>
      <h2 className="mt-3">Perfil de {inversor.nombre}</h2>
      <p>{inversor.descripcion}</p>

      <h4 className="mt-4">Descripción de su experiencia como mentor</h4>
      <p>{inversor.experienciaMentor}</p>

      <h4 className="mt-4">Áreas de Especialización</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Área de Especialización</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {inversor.areasEspecializacion.map((area, index) => (
            <tr key={index}>
              <td>{area.nombre}</td>
              <td>
                {Array.from({ length: 5 }, (_, i) => (
                    i < area.calificacion ? <FaStar key={i} color="#ffc107" /> : <FaRegStar key={i} color="#ffc107" />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="mt-4">Métodos de Asesoría</h4>
      <Form>
        {inversor.metodosAsesoria.map((metodo, index) => (
          <Form.Check
            key={index}
            type="checkbox"
            label={metodo}
            value={metodo}
            onChange={handleMethodChange}
          />
        ))}
      </Form>

      <div className="d-flex flex-wrap mt-4">
        <Button variant="success" className="me-2 mb-2" onClick={handleContact}>
          Contactar
        </Button>
      </div>
    </Container>
  );
}

export default InvestorProfile;
