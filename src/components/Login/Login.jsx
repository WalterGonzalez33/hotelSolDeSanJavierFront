
import  { useState } from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Expresión regular para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función de validación
  const validateForm = () => {
    const newErrors = {};

    // Validación del email
    if (!email) {
      newErrors.email = 'El email es requerido.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'El email no tiene un formato válido.';
    }

    // Validación de la contraseña
    if (!password) {
      newErrors.password = 'La contraseña es requerida.';
    } else if (password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres.';
    }

    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      Swal.fire({
        title: 'Listo!',
        text: 'Has iniciado sesión correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });

      console.log('Formulario enviado', { email, password });
    } else {
      setErrors(validationErrors);
      Swal.fire({
        title: 'Error!',
        text: 'Por favor corrige los errores en el formulario.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col md={12}>
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex justify-content-between mt-4">
              <Button variant="primary" type="submit">
                Iniciar Sesión
              </Button>
              <Button variant="secondary" type="button">
                Registrarse
              </Button>
            </div>
          </Form>

          <div className="text-center mt-4">
            <p>O registrarse con</p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" className="d-flex align-items-center">
                <BsFacebook size={20} className="me-2" /> Facebook
              </Button>
              <Button variant="danger" className="d-flex align-items-center">
                <BsGoogle size={20} className="me-2" /> Google
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
