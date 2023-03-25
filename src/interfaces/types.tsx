export enum Status {
  None = 0,
  Selected,
  Attempted,
  Completed,
}

export type TermModule = {
  code: string;
  status: Status;
};

export interface Term {
  codes: TermModule[];
}

export interface Module {
  name: string;
  id: string;
  slack: string;
  credits: 0 | 15 | 30;
  status: Status;
  lvl: 4 | 5 | 6;
  code: string;
}
