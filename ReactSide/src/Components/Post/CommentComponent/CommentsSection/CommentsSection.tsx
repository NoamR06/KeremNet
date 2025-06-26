import React, { useEffect, useState } from 'react';
import { Comment } from '../Comment';
import "./CommentsSection.css";
import { v4 as uuidv4 } from 'uuid';
import { AddCommentButton } from '../AddCommentButton/AddCommentButton';
import { UserComments } from '../UserComments/UserComments';
import ErrorComponent from '../../../ApplicationLayout/ErrorMessage/Error';
import Loader from '../../../ApplicationLayout/Loader/Loader';

export interface CommentsProps {
  post_id: string;
}

export const CommentsSection: React.FC<CommentsProps> = ({ post_id }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:3002/posts/${post_id}/comments`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Comment[] = await response.json();
                setComments(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [post_id]);

    const handleAddComment = (inputUsername: string, inputContent: string) => {
        const newComment: Comment = {
            id: uuidv4(),
            author: inputUsername,
            content: inputContent,
            date: new Date(),
        };
        setComments(prevComments => [...prevComments, newComment]);
    };
    if (error) return <p> <ErrorComponent received_errors={error} /> </p>;
    if (loading) return <p> <Loader/> </p>;
    if (!comments) return <p> <ErrorComponent received_errors={"Post Not Found"} /> </p>;
    return (
    <div className='comments'>
        <AddCommentButton onButtonClick={handleAddComment}/>
        <h2>Comments</h2> 
        <UserComments post_comments={comments} />
    </div>
  )
};