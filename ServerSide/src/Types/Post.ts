export interface Post{
    id: string;
    author: string;
    content: string;
    date: string;
    likes: number;
    comments: Comment[];
}