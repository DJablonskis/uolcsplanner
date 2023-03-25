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
