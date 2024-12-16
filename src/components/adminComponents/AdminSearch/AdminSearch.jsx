import { Button, Col, Form, Row } from "react-bootstrap";

const AdminSearch = ({ data, setData, reservation = null }) => {
  const filterData = (element) => {
    const valueInput =
      typeof element === "string" ? element : element.target?.value;
    if (reservation) {
      const newList = data.filter((reser) => {
        return reser.user_reservation.email.includes(valueInput);
      });
      setData(newList);
    } else {
      const newList = data.filter((user) => {
        return user.email.includes(valueInput);
      });
      setData(newList);
    }
  };
  const handleSubmit = (form) => {
    form.preventDefault();
    const inputElementValue = form.target[0].value;
    filterData(inputElementValue);
  };
  return (
    <div className="mb-0">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Email"
              maxLength={100}
              className=" pe-0 mr-sm-2 d-inline-flex focus-ring focus-ring-success border-success"
              onInput={(e) => filterData(e)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="success">
              Buscar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default AdminSearch;
