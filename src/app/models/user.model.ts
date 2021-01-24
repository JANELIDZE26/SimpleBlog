import {Post} from './post.model';

export interface User {
  id: number;
  username: string;
  name: string;
  address: { city: string; street: string };
  email: string;
  posts?: Post[];
}
