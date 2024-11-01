import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { validationDate } from "../../utils/validateDate";
import { useNavigate } from "react-router-dom";

const FormularioIndex = ({ scroll }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [validated, setValidated] = useState(false);
  const [isEndDateInvalid, setIsEndDateInvalid] = useState(false);
  const [errorMessages, setErrorMessages] = useState({ valid: false });

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleDateValidate = (event) => {
    const form = event.currentTarget;
    const validateDate = validationDate(startDate, endDate);

    if (form.checkValidity() && validateDate.valid) {
      setErrorMessages({ valid: false });
      return !errorMessages.valid;
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
      Array.from(form.elements).forEach((input) => {
        if (!input.validity.valid) {
          if (input.validity.valueMissing) {
            setErrorMessages({
              valid: true,
              msj: "Los campos son obligatorios",
            });
          } else if (input.validity.tooShort) {
            setErrorMessages({
              valid: true,
              msj: `Debe tener al menos ${input.minLength} caracteres.`,
            });
          }
        }
      });
    } else if (validateDate.valid === false) {
      setIsEndDateInvalid(!isEndDateInvalid);
      setErrorMessages({ valid: true, msj: `${validateDate.msj}` });
    }
    setValidated(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleDateValidate(event)) {
      navigate(`/filter/${startDate}/${endDate}`);
      scroll();
    }
  };

  const handleResizeWindow = () => {
    let newWidth = window.innerWidth;
    setWidthWindowState(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [widthWindowState]);
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col xs={8} md={4} lg={4} className="m-auto mb-3 mb-md-0">
            <Form.Group>
              <Form.Label className="colorVerdeClaro text-center text-md-start w-100">
                Check-in
              </Form.Label>
              <Form.Control
                required
                id="check-in"
                type="date"
                value={startDate}
                onChange={handleDateChange}
                className="form-control d-inline-flex focus-ring focus-ring-success"
              />
            </Form.Group>
          </Col>
          <Col xs={8} md={4} lg={4} className="m-auto mb-3 mb-md-0 ">
            <Form.Group>
              <Form.Label className="colorVerdeClaro text-center text-md-start w-100">
                Check-out
              </Form.Label>
              <Form.Control
                required
                id="check-out"
                type="date"
                value={endDate}
                isInvalid={isEndDateInvalid}
                onChange={handleEndDateChange}
                className={
                  "form-control d-inline-flex focus-ring focus-ring-success"
                }
              />
            </Form.Group>
          </Col>
          <Col xs={5} md={2} className="m-auto mb-md-0">
            <Form.Group>
              <Form.Label className="colorVerdeClaro text-center text-md-start w-100">
                Huéspedes
              </Form.Label>
              <Form.Select
                id="guests"
                className="d-inline-flex focus-ring focus-ring-success"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={8} className="text-center mt-3 mt-md-4 m-auto">
            {errorMessages.valid && (
              <Col sm={12}>
                <p className="text-error-filter pt-2 ps-2 mb-2 text-center">
                  {errorMessages.msj}
                </p>
              </Col>
            )}
            <Button
              type="submit"
              variant="success"
              className="marginBoton m-auto button-custom button-search"
            >
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default FormularioIndex;
