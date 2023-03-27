import { useState } from "react";
import { Status, TermModule } from "../interfaces/types";
import { toast } from "react-toastify";

interface Props {
  changeTermCourseStatus: Function;
  course: TermModule;
}

const StatusSelector = ({ course, changeTermCourseStatus }: Props) => {
  const [selected, setSelected] = useState(course.status);

  const updateSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.currentTarget.value);

    toast.info(
      `Changed ${course.code} status to "${
        Status[parseInt(e.currentTarget.value)]
      }" in term ${course.term + 1}`
    );
    setSelected(parseInt(e.currentTarget.value));
  };

  let colorClasses = ["bg-blue-600", "bg-yellow-600", "bg-green-700"];

  return (
    <div>
      <select
        onChange={updateSelected}
        className={`rounded-sm p-1 text-gray-50 font-bold mr-1 ${
          colorClasses[selected - 1]
        }`}
        defaultValue={selected.toString()}
      >
        <option value="1">{Status[1]}</option>
        <option value="2">{Status[2]}</option>
        <option value="3">{Status[3]}</option>
      </select>
      <button className="rounded-sm p-1 text-gray-50 font-bold mr-2 bg-red-600 hover:bg-red-400">
        Delete
      </button>
    </div>
  );
};

export default StatusSelector;
