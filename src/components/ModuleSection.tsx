import { Term, TermModule } from "../interfaces/types";
interface Props {
  terms: Term[];
}

// function lvl5Access(terms: Term[]) {
// let mods = m.filter((x) => x.lvl === 4);
// let cmCompleted =
//   mods.find((x) => x.code === "CM1015")?.status === Status.Completed;
// let dmCompleted =
//   mods.find((x) => x.code === "CM1020")?.status === Status.Completed;
// let itpCompleted =
//   mods.find((x) => x.code === "CM1005")?.status === Status.Completed;
// let credits = mods
//   .filter((x) => x.status === Status.Completed)
//   .reduce((a, c) => a + c.credits, 0);
// let lvl5bp1 = (dmCompleted || cmCompleted) && itpCompleted && credits >= 45;
// let itp2Status = mods.find((x) => x.code === "CM1010")?.status;
// let ipt2Attempted = itp2Status ? itp2Status > 1 : false;
// let attemptedCredits = mods
//   .filter((x) => x.status > Status.Selected)
//   .reduce((a, c) => a + c.credits, 0);
// let lvl5bp2 = ipt2Attempted && lvl5bp1 && attemptedCredits >= 75;
// let lvl5bp3 = mods.filter((x) => x.status < Status.Selected).length === 0;
// let lvl5Available = lvl5bp1 && lvl5bp2 && lvl5bp3;
// return { available: lvl5Available, bp1: lvl5bp1, bp2: lvl5bp2, bp3: lvl5bp3 };
// }

// Generates object with course codes as keys, each key has an array representing instance of course, term and status of instance.
function ModuleSection({ terms }: Props): JSX.Element {
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
      <h3 className="text-black-700 font-bold text-xl mt-2 mb-4">
        Taken modules
      </h3>
      {Object.keys(allModules).map((k) => (
        <div>
          <p>Course: {k}</p>
          <div>
            {allModules[k].map((inst) => (
              <div key={inst.code + "-" + inst.status}>{inst.status}</div>
            ))}
          </div>
        </div>
      ))}

      {/* 
        // <div>
        //   <h6> To progress to FHEQ Level 5 modules, you must have:</h6>
        //   <small>
        //   <ul>
        //       <li style={{ color: lvl5.bp1 ? "black" : "red" }}>
        //         passed, or been awarded credit through recognition of prior
        //         learning, for at least 45 credits at Level 4, including
        //         Introduction to Programming I and either Discrete or
        //         Computational Mathematics
        //       </li>
        //       <li style={{ color: lvl5.bp2 ? "black" : "red" }}>
        //         made an attempt at a further 30 credits at Level 4, including
        //         Introduction to Programming II
        //       </li>
        //       <li style={{ color: lvl5.bp3 ? "black" : "red" }}>
        //         registered for any Level 4 modules not yet attempted alongside
        //         Level 5 modules., excluding either Discrete or Computational
        //         Mathematics(owing to availability in the current registration
        //         session) and any for which you have been awarded credit through
        //         recognition of prior learning
        //       </li>
        //     </ul> 
        //   </small>
        // </div> */}

      {/* <div>
          <h6>To progress to FHEQ Level 6 modules, you must have:</h6>
          <small>
            <ul>
              <li>
                passed at least 45 credits at Level 5 including Object Oriented
                Programming or Software Design and Development
              </li>
              <li>
                made an attempt at a further 45 credits at Level 5 including
                Object Oriented Programming or Software Design and Development
              </li>
              <li>
                registered for any Level 5 modules not yet attempted alongside
                your Level 6 modules. If, for exceptional reasons, you have not
                attempted any Level 4 modules, you must also register on these
                alongside your Level 6 modules
              </li>
            </ul>
          </small>
        </div> */}
    </div>
  );
}

export default ModuleSection;
