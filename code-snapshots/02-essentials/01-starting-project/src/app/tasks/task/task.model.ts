import {User} from "../../user/user.model";

export interface Task {
  id: string,
  userId: User['id']
  title: string
  summary: string
  dueDate: string
}

// 1. Add a new type
export type NewTask = Omit<Task, 'id' | 'userId'>;
