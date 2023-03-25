import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Mod from "./Mod";
import { Module } from "../interfaces/types";
import { Draggable, Droppable } from "react-beautiful-dnd";

interface Props {
  m: Module[];
  lvl: number;
  inc: Function;
}

const ModuleAccordion = ({ m, lvl, inc }: Props) => {
  let modules = m.filter((l) => l.lvl === lvl);

  return (
    <Accordion className="mb-2">
      <Accordion.Item eventKey={lvl.toString()}>
        <Accordion.Header>
          <strong>Level {lvl}</strong>
        </Accordion.Header>
        <Accordion.Body>
          <Droppable droppableId={lvl.toString()}>
            {(provided) => (
              <ListGroup
                variant="flush"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {m
                  .filter((l) => l.lvl === lvl)
                  .map((mod, i) => (
                    <Draggable
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ModuleAccordion;
