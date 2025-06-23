import { Comment } from "../Comment/Comment";

export interface Post {
  id: string;
  author: string;
  content: string;
  date: Date;
  likes: number;
  comments: Comment[];
}