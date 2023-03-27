import React, { useState } from "react";

import ModuleSection from "./components/ModuleSection";
import Calendar from "./components/Calendar";
import { Status, Term } from "./interfaces/types";

import Modal from "react-modal";
import ModuleAccordion from "./components/ModuleAccordion";

// Styles and import of toastify notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  Modal.setAppElement("#root");
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

  let [modalOpen, setModalOpen] = useState(false);

  let [modalTerm, setModalTerm] = useState(0);

  function openModal(term: number) {
    setModalTerm(term);
    setModalOpen(true);
  }

  // function addToTerm(term: number, id: string) {
  //   setTerms((old) => {
  //     // TODO: logic for dublicates and alowed modules to be checked

  //     if (old[term].takenCourses.length < 4) {
  //       //maximum of modules not reached
  //       // TODO: Display toast message

  //       if (old[term].takenCourses.filter((m) => m.code === id).length > 0) {
  //         // Cant have 2 same modules in a term
  //         // TODO: Display toast message
  //         return old;
  //       }

  //       let n = [...old];
  //       n[term] = {
  //         takenCourses: [
  //           ...old[term].takenCourses,
  //           { code: id, status: Status.Selected, term: term },
  //         ],
  //       };

  //       return n;
  //     }

  //     return old;
  //   });
  //   // if (years.length > year) {
  //   //   console.log("adding");
  //   //   let t = years[year][term as keyof Year];
  //   //   if (!t.includes(id)) {
  //   //     setYears((oldState) => {
  //   //       let n = [...oldState];
  //   //       let updated = { ...oldState[year] };
  //   //       updated[term as keyof Year].push(id);
  //   //       n[year] = updated;
  //   //       return n;
  //   //     });
  //   //   }
  //   // }
  // }

  function addCourseToTerm(courseCode: string, termIndex: number) {
    setTerms((old) => {
      let n = [...old];
      n[termIndex].takenCourses = [
        ...old[termIndex].takenCourses,
        { code: courseCode, status: Status.Selected, term: termIndex },
      ];

      return n;
    });
    setModalOpen(false);
  }

  return (
    <div className="bg-stone-300">
      <div className="bg-stone-200 container p-0 mx-auto font-sans">
        <div className="grid grid-cols-6">
          <div className="col-span-1 px-2">
            <ModuleSection terms={terms} />
          </div>
          <div className="bg-stone-100 col-span-5 px-2">
            <Calendar terms={terms} openModal={openModal} />
          </div>
        </div>

        <Modal isOpen={modalOpen} contentLabel="Module selection window">
          <div className="flex items-center">
            <h2 className="mr-auto italic h2 mb-4">
              Adding courses to term {modalTerm + 1}
            </h2>
            <button
              className="px-2 py-1 bg-red-600 text-gray-100 rounded-sm font-bold"
              onClick={() => setModalOpen(false)}
            >
              x
            </button>
          </div>

          <div>
            <ModuleAccordion
              add={addCourseToTerm}
              terms={terms}
              termIndex={modalTerm}
              lvl={4}
            />
            <ModuleAccordion
              add={addCourseToTerm}
              terms={terms}
              termIndex={modalTerm}
              lvl={5}
            />
            <ModuleAccordion
              add={addCourseToTerm}
              terms={terms}
              termIndex={modalTerm}
              lvl={6}
            />
          </div>
          <div>Term selected is {modalTerm}</div>
        </Modal>

        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}

export default App;
