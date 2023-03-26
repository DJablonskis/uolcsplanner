import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { Term } from "../interfaces/types";
import { Courses } from "../courses";
import AccordionCourse from "./AccordionCourse";

interface Props {
  terms: Term[];
  lvl: number;
}

const ModuleAccordion = ({ terms, lvl }: Props) => {
  let modules = Courses.filter((l) => l.lvl === lvl);

  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey={lvl.toString()}>
        <Accordion.Header>
          <strong>Level {lvl}</strong>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {modules.map((m) => (
              <AccordionCourse course={m} terms={terms} />
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ModuleAccordion;
