import { Comment, User } from './index.model';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  comments?: Comment[];
  user?: User;
}
