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
    <div className="bg-orange-100 mx-1 py-2 px-2">
      <span className="ml-2">Term {i + 1}</span>
      {term.takenCourses.length < 4 && (
        <button
          className="font-bold bg-sky-600 hover:bg-sky-400 hover:text-slate-700 text-slate-100 rounded mr-2 px-2 py-1  border-sky-900 ml-2"
          onClick={() => selection(i)}
        >
          Add new course
        </button>
      )}

      <div>
        {term.takenCourses.map((tm) => (
          <Mod course={tm} />
        ))}
        {term.takenCourses.length === 0 && (
          <div className="my-2 pl-2">
            <p className="italic text-gray-700" style={{ maxWidth: "60ch" }}>
              No courses selected for this term.
            </p>
            <p
              className="italic text-gray-700 mt-2"
              style={{ maxWidth: "60ch" }}
            >
              To add new courses - press "Add new course" button above.
            </p>
          </div>
        )}
        {term.takenCourses.length > 4 && <p>Too many courses</p>}
      </div>
    </div>
  );
};

export default TermBox;
