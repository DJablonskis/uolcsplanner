import { Status, TermModule } from "../interfaces/types";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Badge from "react-bootstrap/Badge";

import { Courses } from "../courses";

interface Props {
  module: TermModule;
  isDragging?: boolean;
  editable?: boolean;
}

const Mod = ({ module }: Props) => {
  let m = Courses.find((c) => c.code === module.code);

  return m ? (
    <ListGroupItem className="px-4 py-2 mb-1">
      <div>
        <strong>{m.code}</strong> <small> ({m.id})</small>
        <Badge style={{ cursor: "pointer" }} className="ms-4">
          {Status[module.status]}
        </Badge>
      </div>
      <div className="h5 mt-1">
        <em>{m.name}</em>
      </div>
    </ListGroupItem>
  ) : (
    <p>Course does not exist</p>
  );
};

export default Mod;
