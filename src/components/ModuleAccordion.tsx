import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Mod from "./Mod";
import { Term, Status } from "../interfaces/types";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Courses, getCourseInstances } from "../courses";

interface Props {
  terms: Term[];
  lvl: number;
}

const ModuleAccordion = ({ terms, lvl }: Props) => {
  let modules = Courses.filter((l) => l.lvl === lvl);

  let droppableModules = modules.map((m) => {
    let instances = getCourseInstances(terms, m.code);
  });

  let available = modules.filter((l) => l.status === Status.None);

  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey={lvl.toString()}>
        <Accordion.Header>
          <strong>Level {lvl}</strong>
        </Accordion.Header>
        <Accordion.Body>
          {available.length > 0 ? (
            <Droppable droppableId={lvl.toString()} isDropDisabled={true}>
              {(provided) => (
                <ListGroup
                  variant="flush"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {available.map((mod, i) => (
                    <Draggable
                      // isDragDisabled={
                      //   mod.status === Status.Completed ||
                      //   mod.status === Status.Selected
                      // }
                      key={"year" + mod.code}
                      draggableId={mod.code}
                      index={i}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Mod
                            editable={true}
                            isDragging={snapshot.isDragging}
                            inc={inc}
                            key={mod.code as React.Key}
                            module={mod}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ListGroup>
              )}
            </Droppable>
          ) : (
            <div>
              <h5>All modules selected</h5>
              <p>
                If you cant access higher level modules, makes sure you mark
                "Completed" or "Attempted" modules in the calendar view.
              </p>
            </div>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ModuleAccordion;
