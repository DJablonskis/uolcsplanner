import { Term, TermModule } from "../interfaces/types";
import Year from "./Year";

interface Props {
  terms: Term[];
  openModal: Function;
}

let Calendar = ({ terms, openModal }: Props) => {
  let years = [1, 2, 3, 4, 5, 6];

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
      {years.map((y) => (
        <Year
          key={"year-" + y}
          number={y}
          terms={terms}
          selection={openModal}
        />
      ))}
    </div>
  );
};

export default Calendar;
