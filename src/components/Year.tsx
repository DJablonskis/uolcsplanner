import { Droppable } from "react-beautiful-dnd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Term } from "../interfaces/types";
import "./Year.css";

interface Props {
  number: number;
  terms: Term[];
}

let Year = ({ terms, number }: Props) => {
  console.log(terms);

  let t1 = number * 2 - 2;
  let t2 = number * 2 - 1;
  return (
    <Row className="year p-2">
      <Col xs={12}>
        <h3>Year {number}</h3>
      </Col>
      <Col className="term p-2 me-2">
        <div>Term 1</div>
        <Droppable droppableId={`term-${t1}`}>
          {(provided) => (
            <div
              className="droparea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {terms[t1].codes.length + " modules"}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
      <Col className="term p-2">
        <div>Term 2</div>
        <Droppable droppableId={`term-${t2}`}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="droparea"
            >
              {terms[t2].codes.length + " modules"}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
    </Row>
  );
};

export default Year;
