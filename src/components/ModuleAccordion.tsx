import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Mod from "./Mod";
import { Term, Module } from "../interfaces/types";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Courses } from "../courses";

interface Props {
  terms: Term[];
  lvl: number;
}



const AccordionCourse = ({m}:any) =>{
  return  <ListGroupItem className="px-4 py-2 mb-1">
  <div>
    <strong>{m.code}</strong> <small> ({m.id})</small>
  </div>
  <div className="h5 mt-1">
    <em>{m.name}</em>
  </div>
</ListGroupItem>
}

const ModuleAccordion = ({ terms, lvl }: Props) => {

  let modules: Module[] = Courses.filter((l) => l.lvl === lvl);

  // let droppableModules = modules.map((m) => {
  //   let instances = getCourseInstances(terms, m.code);
  //   instances.map
  //   console.log(instances)
  // });





  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey={lvl.toString()}>
        <Accordion.Header>
          <strong>Level {lvl}</strong>
        </Accordion.Header>
        <Accordion.Body>
          {modules.length > 0 ? (
            <Droppable droppableId={lvl.toString()} isDropDisabled={true}>
              {(provided) => (
                <ListGroup
                  variant="flush"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {modules.map((mod, i) => (
                    <Draggable
                      // isDragDisabled={
                      //   mod.status === Status.Completed ||
                      //   mod.status === Status.Selected
                      // }
                      key={"year" + mod.code}
                      draggableId={mod.code}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Mod
                          code={mod.code}
                          key={mod.code as React.Key}
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
