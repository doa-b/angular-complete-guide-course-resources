import {User} from "../../user/user.model";

export interface Task {
  id: string,
  userId: User['id']
  title: string
  summary: string
  dueDate: string
}
