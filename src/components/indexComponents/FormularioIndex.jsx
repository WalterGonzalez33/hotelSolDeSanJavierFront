import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../css/index.css";
import { validationDate } from "../../utils/validateDate";

const FormularioIndex = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [widthWindowState, setWidthWindowState] = useState(window.innerWidth);
  const [validated, setValidated] = useState(false);
  const [isEndDateInvalid, setIsEndDateInvalid] = useState(false);
  const [errorMessages, setErrorMessages] = useState({ valid: false });

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
      console.log("todo ok");
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
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Check-in</Form.Label>
              <Form.Control
                required
                id="check-in"
                type="date"
                value={startDate}
                onChange={handleDateChange}
                className="form-control"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Check-out</Form.Label>
              <Form.Control
                required
                id="check-out"
                type="date"
                value={endDate}
                isInvalid={isEndDateInvalid}
                onChange={handleEndDateChange}
                className={"form-control"}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label className="colorVerdeClaro">Huéspedes</Form.Label>
              <Form.Select id="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            {errorMessages.valid && widthWindowState < 992 && (
              <Col sm={12}>
                <p className="text-danger pt-3 ps-2 mb-0">
                  {errorMessages.msj}
                </p>
              </Col>
            )}
            <Button type="submit" variant="success" className="marginBoton">
              Buscar
            </Button>
          </Col>
          {errorMessages.valid && widthWindowState > 992 && (
            <Col sm={12}>
              <p className="text-danger pt-3 ps-2 mb-0">{errorMessages.msj}</p>
            </Col>
          )}
        </Row>
      </Form>
    </Container>
  );
};

export default FormularioIndex;
