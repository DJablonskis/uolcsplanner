import { Status, TypeModule } from "../courses";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";

import { Draggable } from "react-beautiful-dnd";

interface Props {
  module: TypeModule;
  inc: Function;
}

const Module = ({ module: m, inc }: Props) => {
  let bg = ["secondary", "primary", "warning", "success"];
  return (
    <ListGroupItem>
      <div>
        <strong>{m.code}</strong> <small> ({m.id})</small>
        <Badge
          style={{ cursor: "pointer" }}
          onClick={() => inc(m.code)}
          className="ms-4"
          bg={bg[m.status]}
        >
          {Status[m.status]}
        </Badge>
      </div>
      <div className="h5 mt-1">
        <em>{m.name}</em>
      </div>
    </ListGroupItem>
  );
};

export default Module;
