import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Term } from "../interfaces/types";
import TermBox from "./TermBox";
import "./Year.css";

interface Props {
  number: number;
  terms: Term[];
  selection: Function;
}

let Year = ({ terms, number, selection }: Props) => {
  console.log(terms);

  let t1 = number * 2 - 2;
  let t2 = number * 2 - 1;
  return (
    <Row className="year p-2">
      <Col xs={12}>
        <h3>Year {number}</h3>
      </Col>
      <TermBox selection={selection} terms={terms} i={t1} />
      <TermBox selection={selection} terms={terms} i={t2} />
    </Row>
  );
};

export default Year;
