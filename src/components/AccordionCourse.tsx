import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { getCourseInstances } from "../courses";
import { Module, Term } from "../interfaces/types";

interface Props {
  course: Module;
  terms: Term[];
}

const AccordionCourse = ({ course, terms }: Props) => {
  return (
    <ListGroupItem className="px-4 py-2 mb-1">
      <div>
        <strong>{course.code}</strong>
        <small> ({course.id})</small>
      </div>
      <div className="h5 mt-1">
        <em>{course.name}</em>
      </div>
      <div>
        Instances:{" "}
        {getCourseInstances(terms, course.code).map((i) => (
          <div>
            {i.code} {i.status}
          </div>
        ))}
      </div>
    </ListGroupItem>
  );
};

export default AccordionCourse;
