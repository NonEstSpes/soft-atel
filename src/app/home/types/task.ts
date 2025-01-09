export interface Task {
  key: string;
  time: Time
  path: Path
  title: string
  status: Status
  isWorking: boolean
  label: Label & Error
  executor: string
}

export interface Time {
  spent: number
  expected: number
}

export interface Path {
  project: string
  product: string
  version: string
}

export enum Status {
  Approval,
  Execution,
  Review,
  Testing,
  Deployment,
  Closed,
}

export enum Label {
  Frontend,
  Backend,
  Testing,
  Design,
  Analytics,
}

export enum Error {
  Blocked,
  Critical,
  Major,
  Minor,
  Trivial,
}
