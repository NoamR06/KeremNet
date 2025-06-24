import { PostComponent } from "./Post/PostComponent";
import { Comment } from "./Post/Comment/Comment";
import { useEffect, useState } from "react";

interface Post {
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
        const response = await fetch('http://localhost:3001/posts');
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
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>; 

    posts.forEach(({comments}) => {
        comments.forEach((comment) => {
            if (typeof comment.date === 'string') {
                comment.date = new Date(comment.date);
            }
        });
    });

    return (
        <div className="posts-container">
            {
                posts.map(({id, author, content, date, likes, comments}) => (
                    <PostComponent
                    id = {id}
                    author = {author}
                    content = {content}
                    date = {new Date(date)}
                    post_likes = {likes}
                    post_comments = {comments}
                    />
                ))  
            }
        </div>
    );
}
