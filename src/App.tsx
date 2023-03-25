import React, { useState } from "react";
import "./App.css";

import ModuleSection from "./components/ModuleSection";
import Calendar from "./components/Calendar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DragDropContext } from "react-beautiful-dnd";
import { Status, Term } from "./interfaces/types";

function App() {
  const [terms, setTerms] = useState<Term[]>([
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
    { takenCourses: [] },
  ]);

  function handleOnDragEnd(result: any) {
    console.log(result);
    if (result.destination) {
      if (result.destination.droppableId.startsWith("term")) {
        let data = result.destination.droppableId.split("-");
        addToTerm(parseInt(data[1]), result.draggableId);
      } else if (result.source.droppableId === result.destination.droppableId) {
        // TODO: handle drop
      } else {
        console.log("not supported");
      }
    }
  }

  function addToTerm(term: number, id: string) {
    console.log("adding: ", term, id);

    setTerms((old) => {
      // TODO: logic for dublicates and alowed modules to be checked

      if (old[term].takenCourses.length < 4) {
        //maximum of modules not reached
        // TODO: Display toast message

        if (old[term].takenCourses.filter((m) => m.code === id).length > 0) {
          // Cant have 2 same modules in a term
          // TODO: Display toast message
          return old;
        }

        let n = [...old];
        n[term] = {
          takenCourses: [
            ...old[term].takenCourses,
            { code: id, status: Status.Selected, term: term },
          ],
        };

        return n;
      }

      return old;
    });
    // if (years.length > year) {
    //   console.log("adding");
    //   let t = years[year][term as keyof Year];
    //   if (!t.includes(id)) {
    //     setYears((oldState) => {
    //       let n = [...oldState];
    //       let updated = { ...oldState[year] };
    //       updated[term as keyof Year].push(id);
    //       n[year] = updated;
    //       return n;
    //     });
    //   }
    // }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        <Row>
          <Col md={6} lg={5} xl={4} xxl={3}>
            <ModuleSection terms={terms} />
          </Col>
          <Col>
            <Calendar terms={terms} />
          </Col>
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default App;
