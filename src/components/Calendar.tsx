import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Term } from "../interfaces/types";
import Year from "./Year";

interface Props {
  terms: Term[];
}

let Calendar = ({ terms }: Props) => {
  let years = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Row>
        <Col>
          <h1>Study calendar</h1>
        </Col>
      </Row>

      {years.map((y) => (
        <Year key={"year-" + y} number={y} terms={terms} />
      ))}
    </Container>
  );
};

export default Calendar;
