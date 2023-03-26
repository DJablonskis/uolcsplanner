import Col from "react-bootstrap/esm/Col";
import { Term } from "../interfaces/types";
import Mod from "./Mod";

interface Props {
  terms: Term[];
  i: number;
  selection: Function;
}

const TermBox = ({ terms, i, selection }: Props) => {
  let term = terms[i];
  return (
    <Col xs={6} className="term">
      <div>Term {i + 1}</div>
      <div>
        {term.takenCourses.length < 4 && (
          <button onClick={() => selection(i)}>Add</button>
        )}
        {term.takenCourses.map((tm) => (
          <Mod course={tm} />
        ))}

        {term.takenCourses.length > 4 && <p>Too many courses</p>}
      </div>
    </Col>
  );
};

export default TermBox;
