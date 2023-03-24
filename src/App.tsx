import React, { useState } from "react";
import "./App.css";
import { modules, Status, TypeModule } from "./courses";

import ModuleSection from "./components/ModuleSection";
import { Calendar, Year } from "./components/Calendar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [courses, setCourses] = useState(modules);

  const [years, setYears] = useState<Year[]>([{ t1: [], t2: [] }]);

  console.log(years);

  let increaseCourseStatus = (code: string) => {
    setCourses((oldState) => {
      let i = oldState.findIndex((a) => a.code === code);
      let n = [...oldState];
      let s = (oldState[i].status + 1) % 4;
      n[i] = { ...oldState[i], status: s };

      return n;
    });
  };

  function handleOnDragEnd(result: any) {
    console.log(result);
    if (result.destination) {
      if (result.destination.droppableId.startsWith("y-")) {
        let data = result.destination.droppableId.split("-");
        addToTerm(parseInt(data[1]), data[2], result.draggableId);
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

  function handleAddYear() {
    setYears((oldState) => [...oldState, { t1: [], t2: [] }]);
  }

  function addToTerm(year: number, term: string, id: string) {
    if (years.length > year) {
      console.log("adding");
      let t = years[year][term as keyof Year];
      if (!t.includes(id)) {
        setYears((oldState) => {
          let n = [...oldState];
          let updated = { ...oldState[year] };
          updated[term as keyof Year].push(id);
          n[year] = updated;

          return n;
        });
      }
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>
        <Row>
          <Col md={6} lg={5} xl={4} xxl={3}>
            <ModuleSection inc={increaseCourseStatus} modules={courses} />
          </Col>
          <Col>
            <Calendar years={years} addYear={handleAddYear} />
          </Col>
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default App;
