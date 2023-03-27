import { Term } from "../interfaces/types";
import { Courses } from "../courses";
import AccordionCourse from "./AccordionCourse";

interface Props {
  terms: Term[];
  lvl: number;
  termIndex: number;
  add: (courseCode: string, termIndex: number) => void;
}

const ModuleAccordion = ({ lvl, termIndex, add }: Props) => {
  // TODO: do availability filtering here??
  let modules = Courses.filter((l) => l.lvl === lvl);

  return (
    <div>
      <strong>Level {lvl}</strong>

      {modules.map((m, i) => (
        <AccordionCourse
          add={add}
          key={m.code + "-" + i}
          course={m}
          termIndex={termIndex}
        />
      ))}
    </div>
  );
};

export default ModuleAccordion;
