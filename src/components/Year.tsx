import { Droppable } from "react-beautiful-dnd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Courses } from "../courses";
import { Term } from "../interfaces/types";
import Mod from "./Mod";
import "./Year.css";

interface Props {
  number: number;
  terms: Term[];
}

let TermDropable = ({ term, i }: { term: Term; i: number }) => {
  return (
    <Col xs={6} className="term">
      <div>Term {i + 1}</div>
      <Droppable
        isDropDisabled={term.takenCourses.length > 3}
        droppableId={`term-${i}`}
      >
        {(provided) => (
          <div
            className="droparea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {term.takenCourses.map((tm) => (
              <Mod code={tm.code} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
  );
};

let Year = ({ terms, number }: Props) => {
  console.log(terms);

  let t1 = number * 2 - 2;
  let t2 = number * 2 - 1;
  return (
    <Row className="year p-2">
      <Col xs={12}>
        <h3>Year {number}</h3>
      </Col>
      <TermDropable term={terms[t1]} i={t1} />
      <TermDropable term={terms[t2]} i={t2} />
    </Row>
  );
};

export default Year;
