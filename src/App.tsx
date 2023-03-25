import React, { useState } from "react";
import "./App.css";
import modules from "./courses";

import ModuleSection from "./components/ModuleSection";
import Calendar from "./components/Calendar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DragDropContext } from "react-beautiful-dnd";
import { Status, Term } from "./interfaces/types";

function App() {
  const [courses, setCourses] = useState(modules);

  const [terms, setTerms] = useState<Term[]>([
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
    { codes: [] },
  ]);

  let increaseCourseStatus = (code: string) => {
    setCourses((oldState) => {
      let i = oldState.findIndex((a) => a.code === code);
      let n = [...oldState];
      let s = (oldState[i].status + 1) % 4;
      n[i] = { ...oldState[i], status: s };

      return n;
    });
  };

  let setCourseStatus = (code: string, s: Status) => {
    setCourses((oldState) => {
      let i = oldState.findIndex((a) => a.code === code);
      let n = [...oldState];
      n[i] = { ...oldState[i], status: s };
      return n;
    });
  };

  function handleOnDragEnd(result: any) {
    console.log(result);
    if (result.destination) {
      if (result.destination.droppableId.startsWith("term")) {
        let data = result.destination.droppableId.split("-");
        addToTerm(parseInt(data[1]), result.draggableId);
      } else if (result.source.droppableId === result.destination.droppableId) {
        setCourses((oldState) => {
          let all = oldState.filter(
            (c) => c.lvl === parseInt(result.source.droppableId)
          );
          let updated = [...all];

          let [moved] = updated.splice(result.source.index, 1);

          updated.splice(result.destination.index, 0, moved);

          return [
            ...updated,
            ...oldState.filter(
              (x) => x.lvl !== parseInt(result.source.droppableId)
            ),
          ];
        });
      } else {
        console.log("not supported");
      }
    }
  }

  function addToTerm(term: number, id: string) {
    console.log("adding: ", term, id);

    setTerms((old) => {
      // TODO: logic for dublicates and alowed modules to be checked

      if (old[term].codes.length < 4) {
        //maximum of modules not reached
        // TODO: Display toast message

        if (old[term].codes.filter((m) => m.code === id).length > 0) {
          // Cant have 2 same modules in a term
          // TODO: Display toast message
          return old;
        }

        let n = [...old];
        n[term] = {
          codes: [...old[term].codes, { code: id, status: Status.Selected }],
        };

        setCourseStatus(id, Status.Selected);

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
            <ModuleSection inc={increaseCourseStatus} modules={courses} />
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
