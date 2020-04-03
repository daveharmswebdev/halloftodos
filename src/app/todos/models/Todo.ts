export interface ITodo {
  id: string;
  todo: string;
  doing: string;
  description: string;
  complete: boolean;
  dueDate: Date;
  completeDate: Date;
  notes: ITodoNote[];
  totalNotes: number;
}

export interface ICreateTodo {
  todo: string;
  doing: string;
  description: string;
  complete: boolean;
  dueDate: Date;
  completeDate: Date;
}

export interface ITodoNote {
  id: string;
  title: string;
  details: string;
  writtenBy: string;
}
