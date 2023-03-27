import { Term } from "../interfaces/types";
import TermBox from "./TermBox";

interface Props {
  number: number;
  terms: Term[];
  selection: Function;
}

let Year = ({ terms, number, selection }: Props) => {
  let t1 = number * 2 - 2;
  let t2 = number * 2 - 1;
  return (
    <div className="border-black mb-2 pb-2">
      <h3 className="ml-3 text-2xl font-semibold my-3">Study year {number}</h3>
      <div className="grid grid-cols-2">
        <TermBox selection={selection} terms={terms} i={t1} />
        <TermBox selection={selection} terms={terms} i={t2} />
      </div>
    </div>
  );
};

export default Year;
