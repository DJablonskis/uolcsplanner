export enum Status {
  None = 0,
  Selected,
  Attempted,
  Completed,
}

export type TermModule = {
  code: string;
  status: Status;
  term: number;
};

export interface Term {
  takenCourses: TermModule[];
}

export interface Module {
  name: string;
  id: string;
  slack: string;
  credits: 0 | 15 | 30;
  lvl: 4 | 5 | 6;
  code: string;
}

export const statusToColor = (status: Status) => {
  if (status === Status.Completed) return "border-green-500";
  if (status === Status.Attempted) return "border-orange-500";
  if (status === Status.Selected) return "border-blue-500";
};
