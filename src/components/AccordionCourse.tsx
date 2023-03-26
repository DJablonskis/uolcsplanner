import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { Module, Term } from "../interfaces/types";

interface Props {
  course: Module;
  termIndex: number;
  add: (courseCode: string, termIndex: number) => void;
}

const AccordionCourse = ({ course, termIndex, add }: Props) => {
  return (
    <ListGroupItem className="px-4 py-2 mb-1">
      <div>
        <strong>{course.code}</strong>
        <small> ({course.id})</small>
      </div>
      <div className="h5 mt-1">
        <em>{course.name}</em>
      </div>
      <button onClick={() => add(course.code, termIndex)}>
        Add to term {termIndex}
      </button>
    </ListGroupItem>
  );
};

export default AccordionCourse;
