import { PostComponent } from "./PostComponent/PostComponent";
import { Comment } from "./CommentComponent/Comment";
import { useEffect, useState } from "react";
import './Post.css'
import Loader from "../ApplicationLayout/Loader/Loader";
import ErrorComponent from "../ApplicationLayout/ErrorMessage/Error";

export interface Post {
    id: string;
    author: string;
    content: string;
    date: string;
    likes: number;
    comments: Comment[];
}

export const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect   (() => {
    const fetchPosts = async () => {
        try {
        const response = await fetch('http://localhost:3002/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
        } catch (err: any) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    fetchPosts();
    }, []);

    if (error) return <p> <ErrorComponent received_errors={error} /> </p>;
    if (loading) return <p> <Loader/> </p>;
    return (
        <div className="posts-container">
            {posts.map(({id, author, content, date, likes, comments}) => (
            <PostComponent id={id} author={author} content={content}
            date={new Date(date)} post_likes={likes} post_comments={comments}></PostComponent>
            ))}
        </div>
    );
}
