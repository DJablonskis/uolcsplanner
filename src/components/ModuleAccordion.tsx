import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { Term } from "../interfaces/types";
import { Courses } from "../courses";
import AccordionCourse from "./AccordionCourse";

interface Props {
  terms: Term[];
  lvl: number;
  termIndex: number;
  add: (courseCode: string, termIndex: number) => void;
}

const ModuleAccordion = ({ lvl, termIndex, add }: Props) => {
  // TODO: do availability filtering here??
  let modules = Courses.filter((l) => l.lvl === lvl);

  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey={lvl.toString()}>
        <Accordion.Header>
          <strong>Level {lvl}</strong>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {modules.map((m, i) => (
              <AccordionCourse
                add={add}
                key={m.code + "-" + i}
                course={m}
                termIndex={termIndex}
              />
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ModuleAccordion;
