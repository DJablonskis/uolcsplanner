import { Courses } from "../courses";
import { TermModule, statusToColor } from "../interfaces/types";
import StatusSelector from "./StatusSelector";

interface Props {
  course: TermModule;
}

const Mod = ({ course }: Props) => {
  let m = Courses.find((c) => c.code === course.code);

  return m ? (
    <div
      className={`flex items-center pl-2 py-2 bg-orange-50 my-1 border-2 rounded ${statusToColor(
        course.status
      )}`}
    >
      <div className="mr-auto">
        <div className=" text-sm text-purple-900 font-bold">
          {m.code} ({m.id})
        </div>
        <div className="text-purple-700 text-lg font-semibold">{m.name}</div>
      </div>
      <StatusSelector course={course} changeTermCourseStatus={() => null} />
    </div>
  ) : (
    <p>Course does not exist</p>
  );
};

export default Mod;
