import { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Year from "./Year";

interface Props {
  years: Year[];
  addYear: any;
}

interface Year {
  t1: string[];
  t2: string[];
}
let Calendar = ({ years, addYear }: Props) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>
            Study calendar{" "}
            {years.length < 6 && <Button onClick={addYear}>+ Add year</Button>}
          </h1>
        </Col>
      </Row>

      {years.length > 0 &&
        years.map((y, i) => <Year key={"year-" + i} number={i} terms={y} />)}
    </Container>
  );
};

export { Calendar, Year };
