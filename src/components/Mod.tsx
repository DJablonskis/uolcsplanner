
import ListGroupItem from "react-bootstrap/ListGroupItem";

import { Courses } from "../courses";

interface Props {
  code: string;
}

const Mod = ({ code }: Props) => {
  let m = Courses.find((c) => c.code === code);

  return m ? (
    <ListGroupItem className="px-4 py-2 mb-1">
      <div>
        <strong>{m.code}</strong> <small> ({m.id})</small>
       
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
