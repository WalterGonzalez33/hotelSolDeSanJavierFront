
import  { useState } from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Login.css";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'El email es requerido.';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'El email no tiene un formato válido.';
    }

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
    <Container className="d-flex justify-content-center align-items-center vh-100 bg-light rounded-4">
      <Row>
        <Col md={12}>
         <div className="text-center mb-4">
            <img src={logo} alt="Logo" className='img-fluid' />
          </div>
          <h2 className="text-center mb-4 letter-spacing">Iniciar Sesión</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className='fs-5' >Email</Form.Label>
              <Form.Control
              className='rounded-5 border-3 '
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
              <Form.Label className='fs-5'>Contraseña</Form.Label>
              <Form.Control
              className='rounded-5 border-3'
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
              <Button variant='outline-primary rounded-5' type="submit">
                Iniciar Sesión
              </Button>
              <Link to="/">
              <Button variant="outline-success rounded-5" type="button">
                Registrarse
              </Button>
              </Link>
            </div>
          </Form>

          <div className="text-center mt-4 ">
  <p className='fs-5'>O registrarse con</p>
  <div className="d-flex justify-content-center gap-3">
    <a href="https://www.facebook.com/login" style={{ textDecoration: 'none' }}>
      <Button variant="primary" className="d-flex align-items-center rounded-5">
        <BsFacebook size={20} className="me-2" /> Facebook
      </Button>
    </a>
    <a href="https://accounts.google.com/login"style={{ textDecoration: 'none' }}>
      <Button variant="danger" className="d-flex align-items-center rounded-5">
        <BsGoogle size={20} className="me-2" /> Google
      </Button>
    </a>
  </div>
</div>
<div className="text-center mt-4">
            <Link to="/Index.jsx">
              <Button variant="dark rounded-5">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
