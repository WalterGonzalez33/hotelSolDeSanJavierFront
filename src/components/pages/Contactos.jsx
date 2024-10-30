import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function TextControlsExample() {
  return (
    <Form className='container'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Ej: Juan" />
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="email" placeholder="Ej: Sanchez" />
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Ej: Juansanchez@gmail.com" />
        <Form.Label>Celular</Form.Label>
        <Form.Control type="email" placeholder="Ej: 3813321783" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Dejanos tu consulta </Form.Label>
        <Form.Control as="textarea" rows={3}  placeholder='Dejanos tu consulta...'/>
      </Form.Group>
      <Button variant="success">Enviar consulta</Button>
    </Form>
    
    
    
  );
}

export default TextControlsExample;