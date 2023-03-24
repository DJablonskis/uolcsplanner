import { Droppable } from "react-beautiful-dnd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Year.css";

interface Props {
  number: number;
  terms: { t1: String[]; t2: String[] };
}

let Year = (props: Props) => {
  return (
    <Row className="year p-2">
      <Col xs={12}>
        <h3>Year {props.number + 1}</h3>
      </Col>
      <Col className="term p-2 me-2">
        <div>Term 1</div>
        <Droppable droppableId={"y-" + props.number + "-t1"}>
          {(provided) => (
            <div
              className="droparea"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
      <Col className="term p-2">
        <div>Term 2</div>
        <Droppable droppableId={"y-" + props.number + "-t2"}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="droparea"
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
    </Row>
  );
};

export default Year;
