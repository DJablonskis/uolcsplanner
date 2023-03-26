import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { Term, TermModule } from "../interfaces/types";
import Year from "./Year";
import Modal from "react-modal";
import { useState } from "react";

import { Courses } from "../courses";
import ModuleAccordion from "./ModuleAccordion";

interface Props {
  terms: Term[];
  addCourseInstance: (courseCode: string, termIndex: number) => void;
}

let Calendar = ({ terms, addCourseInstance }: Props) => {
  Modal.setAppElement("#root");
  let [modalOpen, setModalOpen] = useState(false);

  let [modalTerm, setModalTerm] = useState(0);

  let years = [1, 2, 3, 4, 5, 6];

  function openModal(term: number) {
    setModalTerm(term);
    setModalOpen(true);
  }

  let allModules: { [key: string]: TermModule[] } = {};

  terms.forEach((term) => {
    term.takenCourses.forEach((course) => {
      allModules[course.code]
        ? allModules[course.code].push(course)
        : (allModules[course.code] = [course]);
    });
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Study calendar</h1>
          </Col>
        </Row>

        {years.map((y) => (
          <Year
            key={"year-" + y}
            number={y}
            terms={terms}
            selection={openModal}
          />
        ))}
      </Container>
      <Modal isOpen={modalOpen} contentLabel="">
        <h2>Hello</h2>
        <button onClick={() => setModalOpen(false)}>close</button>
        <div>
          <button
            onClick={() => addCourseInstance("hello", modalTerm)}
          ></button>

          <ModuleAccordion
            add={addCourseInstance}
            terms={terms}
            termIndex={modalTerm}
            lvl={4}
          />
          <ModuleAccordion
            add={addCourseInstance}
            terms={terms}
            termIndex={modalTerm}
            lvl={5}
          />
          <ModuleAccordion
            add={addCourseInstance}
            terms={terms}
            termIndex={modalTerm}
            lvl={6}
          />
        </div>
        <div>Term selected is {modalTerm}</div>
      </Modal>
    </div>
  );
};

export default Calendar;
